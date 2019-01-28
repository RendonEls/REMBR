const express = require('express');
const router = express.Router();

router.use('/', require('./home.js'))
router.use('/user', require('./user'));


router.all('*', (req, res) => {
    res.status(400).send();
  });

  
module.exports = router