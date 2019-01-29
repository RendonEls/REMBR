const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/home') 
//Why require ../controlers/application? answer this

// Format: router.METHOD('PATH', HANDLER) ie router.get('/', controller.action)


router.get('/', applicationController.index )
//change this to go directly to login

module.exports = router