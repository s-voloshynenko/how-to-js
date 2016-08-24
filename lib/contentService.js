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
 * Get topic by theme and number
 * @param {String} theme - topic theme
 * @param {Integer} num - topic num
 */
function getTopic (theme, num) {
  return Content.topics[theme][num];
}
