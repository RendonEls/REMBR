const express = require('express')
const router = express.Router()
const applicationController = require ('../controllers/application') 
//Why require ../controlers/application? answer this

// Format: router.METHOD('PATH', HANDLER) ie router.get('/', controller.action)


router.get('/', function(req, res) {

})

router.post('/', function(req, res) {

})

router.put('/:id', function(req, res) {

})

router.patch('/:id', function(req, res) {

})

router.delete('/:id', function(req, res) {

})

module.exports = router