require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = function (url) {
  return fetch(url).then((response) => {
    if (response.status !== 200) return { status: response.status };

    return response.json();
  }).then((data) => {
    if (data.status) return data;

    return {
      status: 200,
      data: data
    };
  });
};
