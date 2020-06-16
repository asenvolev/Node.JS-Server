const http = require("http");
const routeHandler = require('./routeHandler');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer(routeHandler)

server.listen(port);

console.log(`Server running at http://${hostname}:${port}/`);