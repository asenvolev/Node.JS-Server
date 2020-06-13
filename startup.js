const http = require("http")

http.createServer((req,res) =>{
    res.write('Welcome to the automatic workout generator');
    res.end();
}).listen(4000);

console.log("server is up and running on port 4000");