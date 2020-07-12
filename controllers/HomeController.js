const utils = require('../utilities');
const mongo = require('../mongoUtills');
const SimpleModel = require('../models/SimpleModel');

const actions = {
  'GET': async (request, response) => {
    var db = mongo.getDb();
    let messages = db.collection('messages');
    if (!messages) {
      await db.createCollection('messages');
    }
    let count = await messages.find().count();
    if (count == 0) {
      let student = new SimpleModel("Hello World");
      await db.collection('messages').insertOne(student);
    }
    const messageToRender = await messages.find().toArray();
    console.log(messageToRender);
    utils.sendResponse(response, messageToRender.toString(), 200, {'Content-Type': 'text/plain'});
  },
  'POST': (request, response) => {
    utils.collectData(request, (formattedData) => {

      // do something with the formatted data e.g. store in db
      utils.sendResponse(response, 'Success', 200, {'Content-Type': 'text/plain'});
    });
  }
};

module.exports = (request, response) => {   //TO DO this restricts a contoroller to have up to one function of every request method. Should be extended or refactored.
    var action = actions[request.method];
    if (action) {
      action(request, response);
    } else {
      utils.sendResponse(response, "Not Found", 404);
    }
}