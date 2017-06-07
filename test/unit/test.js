import chai from 'chai';
import chaiAsPromised from "chai-as-promised";
import Promise from 'promise-polyfill';
import fetch from 'isomorphic-fetch';
import * as jwlib from '../../app/jwlib';

chai.use(chaiAsPromised);
var assert = chai.assert;

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
