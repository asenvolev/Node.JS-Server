const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    var workouts = require('./WorkoutController.js');
    const reqUrl =  url.parse(req.url, true);
    
// GET endpoint
  if(reqUrl.pathname == '/workout' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    workouts.getWorkout(req, res);
   }
 }
)