'use strict';

var contentService = require('../lib/contentService');

/**
 * Get topics by theme
 * @param {String} theme - topics' theme
 */
module.exports = (req, res) => {
  var topics = contentService.getTopics(req.params.theme);

  if (topics && topics.length) return res.send(topics);

  res.status(404).send(new Error('Specified topics don\'t exist'));
};
