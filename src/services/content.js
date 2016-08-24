import requester from './utils/requester.js';

exports.fetchTopics = fetchTopics;
exports.fetchTopic = fetchTopic;

/**
 * Return topics list by theme
 * @param {String} theme - topics theme
 */
function fetchTopics (theme) {
  return requester('/api/topics/' + theme);
}

/**
 * Return topic by theme and num
 * @param {String} theme - topic theme
 * @param {Integer} num - topic num
 */
function fetchTopic (theme, num) {
  return requester('/api/topics/' + theme + '/' + num);
}
