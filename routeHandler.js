const url = require('url');
const utils = require('./utilities');
const routes = require('./routes');

module.exports = (request, response) => {
    var parts = url.parse(request.url);
    var route = routes[parts.pathname];

    if (route) {
      route(request, response);
    }
    else {
      utils.sendResponse(response, "Not found", 404);
    }
}