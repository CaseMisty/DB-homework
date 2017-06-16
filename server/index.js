// node 后端服务器
/* eslint-disable no-unused-vars */
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 跨域支持
app.all('*', (req, res, next) => {
  const origin = req.headers.origin
  res.header('Access-Control-Allow-Origin', origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token,sign')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  next()
})

// 引入api与使用路由
const materialApi = require('./api/materialApi')
app.use('/api/material', materialApi)

// 监听端口
app.listen(4001)
console.log('success listen at port:4001......')
