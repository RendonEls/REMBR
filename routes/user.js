const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')


router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/signup', userController.signUp);
router.post('/signup', userController.createSignUp);
router.get('/logout', userController.logout);

router.get('/:id', userController.show);
router.get("/bookmark/new/:id", userController.show)
router.get("/show/:id", userController.show)

router.put("/bookmark/new/:id", userController.updateBookmark)

module.exports = router




// router.post("/", bookmarkController.createBookmark)   //add bookmarkController.requireAuth 
// router.get("/new", bookmarkController.newBookmark)  //add bookmarkController.requireAuth 
// // router.get("/:id", bookmarkController.show)
// // router.put("/:id", bookmarkController.update)   //add bookmarkController.requireAuth 
