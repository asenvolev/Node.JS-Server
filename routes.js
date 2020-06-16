const home = require('./controllers/HomeController');
const workout = require('./controllers/WorkoutController');

module.exports = {
    '/': home,
    '/workout' : workout
  };