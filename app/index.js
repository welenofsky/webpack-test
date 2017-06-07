import Promise from 'promise-polyfill';
import 'whatwg-fetch';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

var resp = fetch('_partial.html')
  .then(function(response) {
    return response.text();
  }).then(function(body) {
    document.body.innerHTML = body;
  });
console.log(resp);