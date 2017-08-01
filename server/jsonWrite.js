module.exports = function (res, rows) {
  if (typeof rows === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(rows)
  }
}
