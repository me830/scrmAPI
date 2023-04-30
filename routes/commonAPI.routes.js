const express = require('express');
const router = express.Router();
const commonAPIController = require('../controller/commonAPI.controller');
 
 
// pincoed
router.get('/pincode/:Id',
commonAPIController.pincode
);
 
 
 

module.exports = router;