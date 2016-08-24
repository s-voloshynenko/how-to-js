'use strict';

var contentService = require('../lib/contentService');

/**
 * Get topic by theme and number
 * @param {String} theme - topic theme
 * @param {Integer} num - topic num
 */
module.exports = (req, res) => {
  var topic = contentService.getTopic(req.params.theme, req.params.num);

  if (topic) return res.send(topic);

  res.status(404).send(new Error('Specified topic doesn\'t exist'));
};
