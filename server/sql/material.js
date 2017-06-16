var pool = require('../dbPool')

module.exports = {
  /**
   * @param {string} materialName
   * @param {function} callback
   */
  addMaterial (materialName, callback) {
    pool.getConnection((err, connect) => {
      if (err) throw err
      const sql = `
        insert into material
        (material_name)
        values ( ?)`
      connect.query(sql, materialName, (err, result) => {
        if (err) throw err
        callback(result)
        connect.release()
      })
    })
  }
}
