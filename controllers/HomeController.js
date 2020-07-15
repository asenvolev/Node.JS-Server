const utils = require('../utilities');
const mongo = require('../mongoUtills');
const SimpleModel = require('../models/SimpleModel').SimpleModel;

const actions = {
  'GET': async (request, response) => {
    var db = mongo.getDb();
    let messages = db.collection('messages');
    if (!messages) {
      await db.createCollection('messages');
    }
    let count = await messages.find().count();
    if (count == 0) {
      let msg = new SimpleModel("Hello World");
      await db.collection('messages').insertOne(msg);
    }
    const result = await messages.find().toArray();
    var messageToRender = result[0].message;
    console.log(messageToRender);
    utils.sendResponse(response, messageToRender, 200, {'Content-Type': 'text/plain'});
  },
  
  'POST': (request, response) => {
    utils.collectData(request, (formattedData) => {

      // do something with the formatted data e.g. store in db
      utils.sendResponse(response, 'Success', 200, {'Content-Type': 'text/plain'});
    });
  }
};

module.exports = (request, response) => {   //TO DO this restricts a contoroller to have up to one function of every request method.
    var action = actions[request.method];   // You should create a service of methods for each request method.
    if (action) {
      action(request, response);
    } else {
      utils.sendResponse(response, "Not Found", 404);
    }
}