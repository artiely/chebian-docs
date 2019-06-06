const express = require('express')
const app = express()
const { resolve } = require('path')
const server = require('http').Server(app)

app.use('/', express.static(resolve(__dirname, './.vuepress/dist')))

server.listen(8086, function() {
  console.log('Node app start at http://localhost:8086')
})
