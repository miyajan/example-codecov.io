'use strict';
var assert = require('power-assert');
var fizzbuzz = require('../');

describe('fizzbuzz', function() {
    it('returns fizzbuzz when divided by 15', function() {
        assert(fizzbuzz(45) === 'fizzbuzz');
    });

    it('returns fizz when divided by 3', function() {
        assert(fizzbuzz(9) === 'fizz');
    });

    it('returns buzz when divided by 5', function() {
        assert(fizzbuzz(10) === 'buzz');
    });
});
