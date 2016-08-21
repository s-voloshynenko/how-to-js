'use strict';

const Content = require('../content');

exports.getTopics = getTopics;

/**
 * Get topics by theme
 * @param {String} theme - Topics' theme
 * Notes: It's safe to get 'undefined', it will be handled in the caller.
 */
function getTopics (theme) {
  return Content.topics[theme];
}
