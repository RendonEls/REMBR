const express = require('express')
const router = express.router()
const userController = require('../controllers/user.js')


router.post('/signup', userController.createSignUp)