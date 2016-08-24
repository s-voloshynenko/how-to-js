'use strict';

const Content = require('../content');

exports.getTopics = getTopics;
exports.getTopic = getTopic;

/**
 * Get topics by theme
 * @param {String} theme - topics' theme
 * Notes: It's safe to get 'undefined', it will be handled in the caller.
 */
function getTopics (theme) {
  return Content.themes[theme];
}

/**
 * Get topic by name
 * @param {String} name - topic's name
 */
function getTopic (name) {
  return Content.topics[theme][name];
}
