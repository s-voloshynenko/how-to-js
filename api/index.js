'use strict';

var router = require('express').Router();

router.get('/topics/:theme', require('./topics.js'));
router.get('/topic/:name', require('./topic.js'));

module.exports = router;
