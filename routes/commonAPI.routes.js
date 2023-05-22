const express = require('express');
const router = express.Router();
const commonAPIController = require('../controller/commonAPI.controller');
const fileController = require('../controller/file.controller');
 
 
// pincoed
router.get('/pincode/:Id',
commonAPIController.pincode
);
// insert module
router.post('/addmodule',
commonAPIController.moduleInsert
);
 
// get file
router.get('/getFiles/:id',
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