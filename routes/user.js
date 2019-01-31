const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')


router.get('/login', userController.login);
router.post('/login', userController.createLogin);

router.get('/signup', userController.signUp);
router.post('/signup', userController.createSignUp);

router.get('/logout', userController.logout);

router.get('/show', userController.show);  //basically dashboard


router.get('/newBookmark', userController.createBookmark)
router.post('/newBookmark/:id', userController.NewBookmark)



router.put('/updateBookmark/:id', userController.UpdateBookmark)  

router.get('/:id/updateBookmark', userController.ShowUpdate)
router.delete('/:id', userController.DeleteBookmark)

router.get('/newNote', userController.newNote)


module.exports = router