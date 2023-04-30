const userservice = require('../service/user.service');
const userController = {};
 
 
userController.login = async (req, res) => {
    try {
        const data = req.body
        // console.log(data);
        if (data.email != '' && data.password != '') {
            const userdetails = await userservice.login(data);
            res.send(userdetails);
        } else {
            const model = {
                message: 'is null ' + data.email + '' + data.password,
                success: false
            }
            res.send(model)
        }


    } catch (e) {
        throw new Error('please try again api says  ' + e.message)
    }
}


module.exports = userController