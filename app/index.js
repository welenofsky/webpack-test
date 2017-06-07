import Promise from 'promise-polyfill';
import fetch from 'isomorphic-fetch';
import * as jwlib from './jwlib';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

var resp = jwlib.render_and_return('http://127.0.0.1:8080/_partial.html');

console.log(resp);