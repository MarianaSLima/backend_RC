const express = require('express');
const UsersController = require('../controllers/UsersController');
const router = express.Router();

router.post('/signup', UsersController.signup);
router.post('/signin', UsersController.signin);
router.put('/user/:id', UsersController.updateId);


module.exports = router;