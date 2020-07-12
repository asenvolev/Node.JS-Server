const MongoClient = require( 'mongodb' ).MongoClient;
const connectionString = "mongodb://localhost:27017";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( connectionString,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
      _db  = client.db('TestDB');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};