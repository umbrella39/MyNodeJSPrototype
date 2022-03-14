'use strict';

// Hello, Node.js World Sample:https://nodejs.org/ja/about/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// DB Operation(by using Test or Prototyping)
const db = require('./plugins/testDbFunc.js');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  console.log(db.thisResult);
//  res.write(db.res.rows[0].user_name);
//  res.write('<meta charset="UTF-8">');
//  res.end('Hello World');
  res.end(db.thisResult);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
