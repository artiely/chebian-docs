const express = require('express')
const app = express()
const { resolve } = require('path')
const server = require('http').Server(app)
var localhost = require('address').ip()
var opn = require('opn')
app.use('/', express.static(resolve(__dirname, './.vuepress/dist')))

// server.listen(8086, function() {
//   console.log('Node app start at http://localhost:8086')
// })
const port = 8086
server.listen(port, () => {
  var uri = `http://${localhost}:${port}`
  console.log(uri)
  opn(uri)
})