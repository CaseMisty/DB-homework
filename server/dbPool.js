var mysql = require('mysql')
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pm',
  port: '3306',
  // 可同时多条SQL执行
  multipleStatements: true
})
module.exports = pool

/*
// 导出查询相关
// var query = function (sql, vals, callback) {
//   pool.getConnection(function (err, conn) {
//     if (err) {
//       callback(err, null, null)
//     } else {
//       conn.query(sql, vals, function (err, fields) {
//         // 释放连接
//         conn.release()
//         // 事件驱动回调
//         callback(err, vals, fields)
//       })
//     }
//   })
// } */
