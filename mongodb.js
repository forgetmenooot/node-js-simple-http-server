var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/book-store';
var _db;

module.exports = {

  connectToDb: function(callback) {
    mongoClient.connect(url, function( err, db ) {
		if (err) {
     		console.log('Unable to connect to the MongoDB server. Error: ' + err);
     		throw new Error(err);
     	} else {
  	 		console.log("Connected correctly to MongoDB server!");
       		_db = db;
       		callback(db);
    	}
	});
  },

  getDb: function() {
    return _db;
  }
};


