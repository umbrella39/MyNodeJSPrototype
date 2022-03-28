'use strict';

// http config(by using Test or Prototyping)
const hp = require('./config.js');

// Postgres DB Operation(by using Test or Prototyping)
const pdb = require('./plugins/PostgresDbCon.js');

const server = hp.http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  
  // Test Log
  console.log(db.thisResult);
  // Array is not empty: Display Array
  if (db.thisResult.length) {
    for (let i = 0; i < db.thisResult.length; i++) {
      res.write(db.thisResult[i].output)
      res.write('\n')
    }
  }

  res.end();
});

server.listen(hp.port, hp.hostname, () => {
  console.log(`Server running at http://${hp.hostname}:${hp.port}/`);
});
