const express = require('express');
const router = express.Router();

router.use('/', require('./home'))
router.use('/user', require('./user'));
router.use('/bookmark', require('./bookmark'));


router.all('*', (req, res) => {
    res.status(400).send();
  });


module.exports = router