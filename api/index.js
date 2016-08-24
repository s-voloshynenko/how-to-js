'use strict';

var router = require('express').Router();

router.get('/topics/:theme', require('./topics.js'));
router.get('/topics/:theme/:num', require('./topic.js'));

module.exports = router;
