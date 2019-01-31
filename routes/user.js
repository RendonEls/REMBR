const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')


router.get('/login', userController.login);
router.post('/login', userController.createLogin);

router.get('/signup', userController.signUp);
router.post('/signup', userController.createSignUp);

router.get('/logout', userController.logout);

router.get('/show', userController.show);
router.get('/newBookmark', userController.createBookmark)
router.post('/newBookmark/:id', userController.NewBookmark)

// router.show('/newBookmark/:id', userController.NewBookmark)   //show one bookmark but to where? make a deletebookmark?

// router.put('/newBookmark/:id', userController.UpdateBookmark)  
// router.delete('/newBookmark/:id', userController.DeleteBookmark)

//newbookmark/:id needs to route to a new site that displays one individual bookmark



module.exports = router