const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  mode: "",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
