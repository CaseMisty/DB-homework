module.exports = function (res, rows) {
  if (typeof rowst === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(rows)
  }
}
