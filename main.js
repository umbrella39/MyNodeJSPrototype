'use strict';

// http config(by using Test or Prototyping)
const hp = require('./config.js');

// DB Operation(by using Test or Prototyping)
const db = require('./plugins/testDbFunc.js');

const server = hp.http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  console.log(db.thisResult);
//  res.write(db.res.rows[0].user_name);
//  res.write('<meta charset="UTF-8">');
//  res.end('Hello World');
  res.end(db.thisResult);
});

server.listen(hp.port, hp.hostname, () => {
  console.log(`Server running at http://${hp.hostname}:${hp.port}/`);
});
