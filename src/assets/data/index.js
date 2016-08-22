'use strict';

/**
 * Here are placed the base static data.
 * Why?
 * 1. In generally user interacts with that data all the time.
 * 2. Data is static.
 * 3. To get rid of extra server requests/responses.
 * Which data should provided by the server?
 * 1. Topic's content. (obvious)
 * 2. Available topics for relevant theme. (~25 themes x ~15 topics === crazy)
 */

exports.facetsData = require('./facets');
