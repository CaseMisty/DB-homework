var pool = require('../dbPool')

module.exports = {
  /**
   * @param {string} materialName
   * @param {function} callback
   */
  addMaterial (materialName, callback) {
    pool.getConnection((err, connect) => {
      if (err) console.log(err)
      const sql = `
        insert into material_l
        (material_name)
        values ( ?)`
      connect.query(sql, materialName, (err, result) => {
        if (err) console.log(err)
        callback(result)
        connect.release()
      })
    })
  },
  getMaterial (cb) {
    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      conn.query(`
      select * 
      from material_l 
      order by material_id`, (err, res) => {
          if (err) console.log(err)
          cb(res)
          conn.release()
        })
    })
  },
  delMaterial (id, cb) {
    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      conn.query('delete from material_l where material_id = ?', id, (err, result) => {
        console.log('delmaterial' + result)
        if (err) console.log(err)
        cb(result)
        conn.release()
      })
    })
  }
}
