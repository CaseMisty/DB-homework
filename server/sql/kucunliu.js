var pool = require('../dbPool')
module.exports = {
  addKucunLiu (id, des, num, callback) {
    pool.getConnection((err, connect) => {
      if (err) console.log(err)
      console.log(`insert rukuliu not api id:${id} des:${des} num${num}`)
      const sql = `
        insert into kucunliu
        (id,des,time,num)
        values(?,?,now(),?)`
      connect.query(sql, [id, des, num], (err, result) => {
        if (err) console.log(err)
        callback(result)
        connect.release()
      })
    })
  },
  getList (cb) {
    pool.getConnection((err, conn) => {
      if (err) console.log(err)
      console.log('get kucunliu')
      const sql = `
        select id, des,  
        DATE_FORMAT( time, '%Y-%m-%d   %H:%i:%s') as time,num 
        from kucunliu`
      conn.query(sql, (err, res) => {
        if (err) console.log(err)
        cb(res)
        conn.release()
      })
    })
  }
}
