'use strict';

var router = require('express').Router();

router.get('/topics/:theme', require('./topics.js'));

module.exports = router;
