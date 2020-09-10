const { Router } = require('express');
const control = require('../controller/controller');

const router = Router();

router.get('/register', control.signup_get);
router.get('/login', control.login_get);
router.post('/register', control.signup_post);
router.post('/login', control.login_post);
router.get('/logout', control.logout_get);


module.exports = router;