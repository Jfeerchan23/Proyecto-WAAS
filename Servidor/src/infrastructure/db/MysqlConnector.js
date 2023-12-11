require('dotenv').config()
const mysql = require('mysql2')

module.exports = class MysqlConnector {
  async runQuery (query, object = null) {
    const connection = this.#createDbConnection()
    return await this.#runDbQuery(query, connection, object).then((res) => {
      connection.end()
      return res
    })
  }

  #createDbConnection () {
    return mysql.createConnection(this.#getDbConfig())
  }

  #getDbConfig () {
    return {
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    }
  }

  async #runDbQuery (sql, connection, object = null) {
    return await new Promise((resolve, reject) => {
      const params = object !== null ? [object] : []
      connection.query(sql, ...params, (error, results, fields) => {
        if (error) reject(error)
        resolve({ results, fields })
      })
    })
  }
}
