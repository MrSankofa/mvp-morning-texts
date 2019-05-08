const express = require('express')
const path = require('path')
const cors = require('cors');
var bodyParser = require('body-parser');
const { sendMessage } = require('../controller/morningTexts.js')

let { morningTexts } = require('../model/messagesArchive.js');
let { morningConvoStarters } = require('../model/messagesArchive.js');


const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/message', (req, res) => {
  // res.send('Hello World!')
  res.send(morningTexts[getRandomInt(10)])
})

app.post('/message', (req, res) => {
  console.log('req.body: ', req.body);
  let message = req.body.message;
  let toNumber = req.body.toNumber;

  //sendMessage(toNumber, message)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))