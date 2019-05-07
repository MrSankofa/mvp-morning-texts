const express = require('express')
const cors = require('cors');
let { morningTexts } = require('../model/messagesArchive.js');
let { morningConvoStarters } = require('../model/messagesArchive.js');


const app = express()
const port = 3000

app.use(cors())

app.get('/message', (req, res) => {
  // res.send('Hello World!')
  res.send(morningTexts[getRandomInt(10)])
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))