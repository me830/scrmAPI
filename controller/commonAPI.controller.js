
const commonService = require('../service/commonAPI.service');
const uploadFile = require("../middleware/file-uploader");
const fs = require('express-fileupload');
const commonAPIController = {};

commonAPIController.pincode = async (req, res) => {
    try {
        let Id = req.params.Id;

        const result = await commonService.pincode(parseInt(Id));
        res.send(result);
    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}
commonAPIController.moduleInsert = async (req, res) => {
    try {
        let data = req.body;

        const result = await commonService.moduleInsert(data);
        res.send(result);
    } catch (e) {
        throw new Error('Unable to fetch all  user: ' + e.message)
    }
}


// files here 

commonAPIController.notFound = async (req, res) => {
    try {

        const model = {
            message: 'no such api found',
            success: false,
            TotalRecords: 0,
            responseDate: []
        }
        res.send(model);

    } catch (e) {
        throw new Error('Unable to common api: ' + e.message)
    }
}

 
module.exports = commonAPIController