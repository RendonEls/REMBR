const express = require('express')
const router = express.Router()
const bookmarkController = require('../controllers/bookmark.js')

router.post("/", bookmarkController.create)   //add bookmarkController.requireAuth 
router.get("/new", bookmarkController.new)  //add bookmarkController.requireAuth 
router.get("/:id", bookmarkController.show)
router.put("/:id", bookmarkController.update)   //add bookmarkController.requireAuth 
