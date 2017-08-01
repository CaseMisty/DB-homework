var express = require('express')
var router = express.Router()
var jsonWrite = require('../jsonWrite')
var kucunliu = require('../sql/kucunliu')

router.post('/addKucunLiu', (req, res) => {
  console.log(`insert kucunliu id:${req.body.id}, des:${req.body.des}, num:${req.body.num}`)
  kucunliu.addKucunLiu(req.body.id, req.body.des, req.body.num, (result) => {
    console.log(`库存流记录成功`)
    jsonWrite(res, result)
  })
})
router.get('/getList', (req, res) => {
  console.log('get kucunliu  inApi')
  kucunliu.getList((result) => {
    console.log('getKucunLiu')
    jsonWrite(res, result)
  })
})

module.exports = router
