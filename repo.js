var mongodb = require("./mongodb");
var db = mongodb.getDb();
var bookCollection = db.collection('books');

function get (param, callback) {
	bookCollection.findOne({_id : param}, function (err, result) {
    	callback(err, result);
	});
}

function  update (postData, callback) {
	bookCollection.updateOne({_id : postData._id}, postData, function (err, result) {
    	callback(err, result);
	});
}

function insert (postData, callback) {
	bookCollection.insertOne(postData, function (err, result) {
    	callback(err, result);
	});
}

function remove (param, callback) {
	bookCollection.deleteOne({_id : param}, function (err, result) {
    	callback(err, result);
	});
}

exports.get = get;
exports.update = update;
exports.insert = insert;
exports.remove = remove;