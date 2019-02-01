const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

//authentication routes
router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/signup', userController.signUp);
router.post('/signup', userController.createSignUp);

router.get('/logout', userController.logout);   //need to make this work

//basically dashboard
router.get('/show', userController.show);  

//for bookmark models
router.get('/newBookmark', userController.createBookmark)
router.post('/newBookmark/:id', userController.NewBookmark)
router.put('/updateBookmark/:id', userController.UpdateBookmark)  
router.get('/:id/updateBookmark', userController.ShowUpdate)
router.delete('/:id', userController.DeleteBookmark)


//for note models
router.get('/newNote', userController.newNote)
router.post('/newNote/:id', userController.createNote)
router.delete('/:id', userController.DeleteNote)

module.exports = router

require('../')