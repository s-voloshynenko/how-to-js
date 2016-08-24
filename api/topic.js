'use strict';

var contentService = require('../lib/contentService');

/**
 * Get topic by name
 * @param {String} name - topic's name
 */
module.exports = (req, res) => {
  var topic = contentService.getTopic(req.params.name);

  if (topic) return res.send(topic);

  res.status(404).send(new Error('Specified topic doesn\'t exist'));
};
