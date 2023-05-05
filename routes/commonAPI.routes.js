const express = require('express');
const router = express.Router();
const commonAPIController = require('../controller/commonAPI.controller');
const fileController = require('../controller/file.controller');
 
 
// pincoed
router.get('/pincode/:Id',
commonAPIController.pincode
);
 
// get file
router.get('/getFiles',
fileController.getListFiles
);
//  download file
router.get('/download',
fileController.download
);
//  upload file
router.post('/upload',
fileController.upload
);
 
 
 

module.exports = router;