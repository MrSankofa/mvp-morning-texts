var request = require('request');
// var url = 'http://httpbin.org/ip';
var url = 'https://www.bustle.com/p/6-gifts-to-give-a-partner-whose-love-language-is-words-of-affirmation-3212871';
const {config} = require('./config.js')
console.log('config: ', config);
request(
  {
    method: 'GET',
    url: `http://api.scraperapi.com/?api_key=${config}&url=` + url ,
    headers: {
      Accept: 'application/json',
    },
  },
  function(error, response, body) {
    console.log(body);
  }
);