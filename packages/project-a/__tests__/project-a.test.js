'use strict';

const projectA = require('..');
const assert = require('assert').strict;

assert.strictEqual(projectA(), 'Hello from projectA');
console.info('projectA tests passed');
