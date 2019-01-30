const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')


router.get('/login', userController.login);
router.post('/login', userController.createLogin);

router.get('/signup', userController.signUp);
router.post('/signup', userController.createSignUp);

router.get('/logout', userController.logout);

router.get('/show', userController.show);


//working on updating these bottom two routes
//Get will load user/show
//need to figure out how to get the forum data into db.user


router.get('/update', userController.update)

router.post('/update/:id', userController.updateBookmark)

// router.post('/:id', userController.update)

module.exports = router