const express = require('express')
const app = express()
const { resolve } = require('path')
const server = require('http').Server(app)

app.use('/', express.static(resolve(__dirname, './.vuepress/dist')))

server.listen(8085, function() {
  console.log('Node app start at http://localhost:8085')
})
