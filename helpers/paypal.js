const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PP_CLIENT_ID,
  client_secret: process.env.PP_CLIENT_SECRET,
});

module.exports = paypal;
