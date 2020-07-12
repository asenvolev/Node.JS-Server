const http = require("http");
const routeHandler = require('./routeHandler');
const mongodb = require('./mongoUtills');
const port = 3000;
const hostname = 'localhost';
const server = http.createServer(routeHandler)

mongodb.connectToServer(function( err, client ) {
    if (err){
        console.log(err);
    }
    console.log(`Database connected successfully`)
    
    server.listen(port);
    console.log(`Server running at http://${hostname}:${port}/`);
    
  } );
