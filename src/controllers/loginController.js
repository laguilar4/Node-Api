const loginModel = require('../models/login');
const loginCtrl = {};

loginCtrl.login = async(req, res) => 
{
    const { username, password } = req.body;
    const result = await loginModel(username, password, res);
}

module.exports = loginCtrl;