'use strict';

var router = require('express').Router();

router.get('/topics/:topicsName', require('./topics.js'));

module.exports = router;
