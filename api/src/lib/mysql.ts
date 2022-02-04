import * as mysql from 'mysql2'

let _connection: mysql.Connection

export default () => {
  if (!_connection) {
    _connection = mysql.createConnection({
      database: process.env.MYSQL_DB,
      host: process.env.MYSQL_HOST,
      namedPlaceholders: true,
      password: process.env.MYSQL_PASS,
      port: +process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
    })
  }
  return _connection
}

