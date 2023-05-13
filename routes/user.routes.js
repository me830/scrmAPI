const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
  
// Login user or school 
router.post('/login',
    userController.login
);
router.post('/adduser',
    userController.adduser
);
router.get('/getuser',
    userController.getuser
);


module.exports = router;