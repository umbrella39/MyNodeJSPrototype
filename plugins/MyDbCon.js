'use strict';
// include mysql
const { Pool, Client } = require('mysql')
// DB Connect Info(by using Test or Prototyping)
const dbConnect = require('./mdbConfig.js');

dbConnect.pool.query(dbConnect.SQL_STATEMENT, (err, res) => {
    dbConnect.pool.end()
})

dbConnect.client.connect()

dbConnect.client.query(dbConnect.SQL_STATEMENT, (err, res) => {
  exports.thisResult = res.rows
  dbConnect.client.end()
})