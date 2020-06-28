// pull in dependencies and input validations and user models
const express = require("express");
const router = express.Router();
const bcrypt = require("bcruptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config / keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");