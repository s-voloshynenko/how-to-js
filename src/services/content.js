import requester from './utils/requester.js';

exports.fetchTopics = fetchTopics;

function fetchTopics (topicsTheme) {
  return requester('/api/topics/' + topicsTheme);
}
