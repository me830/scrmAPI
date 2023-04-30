const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
  
// Login user or school 
router.post('/login',
    userController.login
);


module.exports = router;