require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = function (url) {
  return fetch(url);
};
