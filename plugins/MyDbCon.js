'use strict';
// include mysql
const mysql = require('mysql')
// DB Connect Info(by using Test or Prototyping)
const con = require('./mdbConfig.js');
const dbConnect = con.connection;

dbConnect.query(dbConnect.SQL_STATEMENT, (err, res) => {
    dbConnect.pool.end()
})

dbConnect.connect()

dbConnect.query(dbConnect.SQL_STATEMENT, (err, res) => {
  exports.thisResult = res.rows
})

dbConnect.client.end();
