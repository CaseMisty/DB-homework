var pool = require('../dbPool')
module.exports = {
  addChanpin (chanpinName, chanpinDes, callback) {
    pool.getConnection((err, connect) => {
      if (err) console.log(err)
      const sql = `
        insert into chanpin
        (chanpin_name, chanpin_des)
        values (?,?)`
      connect.query(sql, [chanpinName, chanpinDes], (err, result) => {
        if (err) console.log(err)
        callback(result)
        connect.release()
      })
    })
  },
  getChanpin (cb) {
    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      conn.query('select * from chanpin order by chanpin_id', (err, res) => {
        if (err) console.log(err)
        cb(res)
        conn.release()
      })
    })
  }
}
