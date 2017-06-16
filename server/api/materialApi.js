var express = require('express')
var router = express.Router()
var jsonWrite = require('../jsonWrite')
var material = require('../sql/material')

// 增加用户接口
router.post('/addMaterial', (req, res) => {
  var materialName = req.body.materialName
  console.log(`insert materialName ${materialName}`)
  material.addMaterial(materialName, (result) => {
    console.log(`添加材料:${materialName} 成功`)
    jsonWrite(res, result)
  })
})
module.exports = router
