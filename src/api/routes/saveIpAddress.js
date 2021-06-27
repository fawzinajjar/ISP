const express = require("express");
const router = express.Router();
const db = require("../../db/index");
const utils = require('../utils/index')


router.get("/", (req, res) => {
  console.log('route save...!')
  // Request Parameters
  const ipAddress = req.query.ipAddress;
  const stationName = req.query.stationName;

  // Validate Ip Address
  
  const ipValidation = utils.ValidateIPaddress(ipAddress)
  const nameValidation = utils.ValidateName(stationName)

  // Check If Ip Address Exists In SQLITE Database



  
});

module.exports = router;
