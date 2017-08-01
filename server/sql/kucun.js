var pool = require('../dbPool')
module.exports = {
  ruku (num, id, callback) {
    pool.getConnection((err, connect) => {
      if (err) console.log(err)
      // console.log(`update: num:${num}, id:${id}, type of num ${typeof num}`)
      const sql = `
        update material_kucun
        set num = num+?
        where id = ?`
      connect.query(sql, [num, id], (err, result) => {
        if (err) console.log(err)
        callback(result)
        connect.release()
      })
    })
  },
  getKucunList (cb) {
    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      const sql = `
        select material_l.material_id as id, material_l.material_name as name,num 
        from material_kucun,material_l 
        where material_l.material_id=material_kucun.id 
        order by material_id`
      conn.query(sql, (err, res) => {
        if (err) console.log(err)
        cb(res)
        conn.release()
      })
    })
  }
}
