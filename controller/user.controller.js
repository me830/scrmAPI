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
                message:  'Email  is null ' + data.email + 'Password is ' + data.password,
                success: false
            }
            res.send(model)
        }


    } catch (e) {
        throw new Error('please try again api says  ' + e.message)
    }
}
//  add new user
userController.adduser = async (req, res) => {
    try {
        const data = req.body
        const userdetails = await userservice.adduser(data);
        // res.status(201).send(userdetails);
        res.send(userdetails);

    } catch (e) {
        throw new Error('please try again api says  ' + e.message)
    }
}
// get user
userController.getuser = async (req, res) => {
    try {
        const data = req.body
        const userdetails = await userservice.getuser();
        // res.status(201).send(userdetails);
        res.send(userdetails);

    } catch (e) {
        throw new Error('please try again api says  ' + e.message)
    }
}



module.exports = userController