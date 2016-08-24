'use strict';

/**
 * Here are placed the base data.
 * 
 * Which data should provided by the server?
 * 1. Topic's content. (obvious)
 * 2. Available topics for relevant theme. (~25 themes x ~15 topics === crazy)
 */

exports.themes = require('./themes');
exports.facets = require('./facets');
exports.topics = require('./topics');
