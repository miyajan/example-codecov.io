'use strict';
var assert = require('power-assert');
var fizzbuzz = require('../');

describe('fizzbuzz', function() {
    it('returns fizzbuzz when divided by 15', function() {
        assert(fizzbuzz(45) === 'fizzbuzz');
    });
});
