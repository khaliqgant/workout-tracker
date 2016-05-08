#!/usr/bin/env node

'use strict';
/* global describe */
/* global it */

/**
 * Workout Tracker Validation Tests
 * @desc ensure all JSON schema documents are valid schemas
 * @requires mocha http://mochajs.org/
 * @requires assert http://unitjs.com/guide/assert-node-js.html
 * @requires assert https://github.com/defunctzombie/commonjs-assert
 */


var fs        = require('fs'),
    validator = require('is-my-json-valid/require'),
    mocha     = require('mocha'),
    assert    = require('assert');


describe('JSON schema tests', function() {
    it('should grab each schema and validate with the errors object ' +
       'returning null', function(done) {

        var valid,
            location = '../schema/',
            schemas = fs.readdirSync(location);

        schemas.forEach(function(file) {
            valid = validator(location + file);
            assert.equal(valid.errors, null);
        });

        done();
    });
});
