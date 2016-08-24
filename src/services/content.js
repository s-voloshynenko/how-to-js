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
 * Return topic by name
 * @param {String} name - topic name
 */
function fetchTopic (name) {
  return requester('/api/topic/' + name);
}
