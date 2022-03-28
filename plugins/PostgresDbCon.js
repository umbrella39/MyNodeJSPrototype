'use strict';
// include pg
const { Pool, Client } = require('pg')
// DB Connect Info(by using Test or Prototyping)
const dbConnect = require('./pdbConfig.js');

dbConnect.pool.query(dbConnect.SQL_STATEMENT, (err, res) => {
    //console.log(err, res)
    dbConnect.pool.end()
})

dbConnect.client.connect()

dbConnect.client.query(dbConnect.SQL_STATEMENT, (err, res) => {
//  console.log(err, res)
  exports.thisResult = res.rows
  //console.log(thisResult)
  dbConnect.client.end()
})