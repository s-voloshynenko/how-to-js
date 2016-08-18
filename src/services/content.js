import requester from './utils/requester.js';

exports.fetchTopics = fetchTopics;

function fetchTopics (topicsTheme) {
  return requester('/api/topics/' + topicsTheme)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {
        status: true,
        topics: data
      };
    })
    .catch((error) => {
      return {
        status: false,
        error: error
      };
    });
}
