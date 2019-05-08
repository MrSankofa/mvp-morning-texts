var twilio = require('twilio');
const {accountSID} = require('../config.js')
const {authToken} = require('../config.js')

const sendMessage = (toNumber, message) => {
  
  // Find your account sid and auth token in your Twilio account Console.
  var client = new twilio(accountSID, authToken);
  
  // Send the text message.
  client.messages.create({
    to: '+1' + toNumber,
    from: '+17344363342',
    body: message
  });

}

module.exports.sendMessage = sendMessage;