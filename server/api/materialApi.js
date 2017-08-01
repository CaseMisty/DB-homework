var express = require('express')
var router = express.Router()
var jsonWrite = require('../jsonWrite')
var material = require('../sql/material')

// 增加材料接口
router.post('/addMaterial', (req, res) => {
  var materialName = req.body.materialName
  console.log(`insert materialName ${materialName}`)
  material.addMaterial(materialName, (result) => {
    console.log(`添加材料:${materialName} 成功`)
    jsonWrite(res, result)
  })
})
// 查询所有材料getMaterial
router.get('/getMaterial', (req, res) => {
  material.getMaterial((result) => {
    console.log('getMaterial')
    jsonWrite(res, result)
  })
})
// 删除
router.post('/delMaterial', (req, res) => {
  material.delMaterial(req.body.id, (result) => {
    console.log('delMaterial Api')
    result.status = 'SUCCESS'
    jsonWrite(res, result)
  })
})
module.exports = router
