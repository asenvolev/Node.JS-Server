const http = require("http");
const stream = require('fs');
const port = 3000;
const hostname = 'localhost';

const server = require('./route.js');

server.listen(port);

console.log(`Server running at http://${hostname}:${port}/`);