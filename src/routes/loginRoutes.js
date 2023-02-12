const {Router} = require('express');
const loginCtrl = require('../controllers/loginController');
const router = Router();

router.post('/', loginCtrl.login);

module.exports = router;