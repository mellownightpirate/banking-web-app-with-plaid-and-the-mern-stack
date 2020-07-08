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
module.exports = router;