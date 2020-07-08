const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");

const PLAID_CLIENT_ID = "5f05e314f330e200121f05eb";
const PLAID_SECRET = "51d2c7c6c762af714152ec7a89dc28";
const PLAID_PUBLIC_KEY = "d216519a084a5b106b08f58d01fcba";

const client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments.sandbox,
  { version: "2018-05-22" }
);

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

// Routes will go here
// GET  api/plaid/accounts
// Get all accounts linked with plaid for a specific user
// Private
router.get(
  "/accounts",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Account.find({ userId: req.user.id })
      .then(accounts => res.json(accounts))
      .catch(err => console.log(err));
  }
);

// POST api/plaid/accounts/add
// Trades public token for access token and stores credentials in database
// Private
router.post(
  "/accounts/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    PUBLIC_TOKEN = req.body.public_token;
const userId = req.user.id;
const institution = req.body.metadata.institution;
    const { name, institution_id } = institution;
if (PUBLIC_TOKEN) {
      client
        .exchangePublicToken(PUBLIC_TOKEN)
        .then(exchangeResponse => {
          ACCESS_TOKEN = exchangeResponse.access_token;
          ITEM_ID = exchangeResponse.item_id;

// Check if account already exists for specific user
Account.findOne({
  userId: req.user.id,
  institutionId: institution_id
})
  .then(account => {
    if (account) {
      console.log("Account already exists");
    } else {
      const newAccount = new Account({
        userId: userId,
        accessToken: ACCESS_TOKEN,
        itemId: ITEM_ID,
        institutionId: institution_id,
        institutionName: name
      });
newAccount.save().then(account => res.json(account));
    }
  })
  .catch(err => console.log(err)); // Mongo Error
})
.catch(err => console.log(err)); // Plaid Error
}
}
);      

module.exports = router;