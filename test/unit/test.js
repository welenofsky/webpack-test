var assert = require('assert');
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var assert = chai.assert;

import Promise from 'promise-polyfill';
import fetch from 'isomorphic-fetch';
import * as jwlib from '../../app/jwlib';

describe('fetch_wrapper', function() {
  describe('does_exist?', function(){
    it('Should exist', function(){
        assert.equal('function', typeof jwlib.fetch_wrapper);
    });
  });
  describe('does_return?', function() {
    it('should return <p>hello webpack</p>', function() {
        return assert.becomes(jwlib.fetch_wrapper('http://127.0.0.1:8080/_partial.html'), '<p>hello webpack</p>');
    });
  });
});
