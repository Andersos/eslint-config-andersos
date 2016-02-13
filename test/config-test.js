'use strict';

var assert = require('assert');
var config = require('../index.js');

// Ensure that the config has some expected values
assert(require(config.extends).env.node);
assert.equal(config.rules.semi[1], 'always');
