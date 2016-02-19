var mongodb = require("./mongodb");

mongodb.connectToDb(function(db) {

	var server = require("./server");
	var router = require("./route");
	var requestHandlers = require("./requestHandlers");

	var handle = {};
	handle["/book_GET"] = requestHandlers.get;
	handle["/book_PUT"] = requestHandlers.update;
	handle["/book_DELETE"] = requestHandlers.remove;
	handle["/book_POST"] = requestHandlers.insert;

	server.start(router.route, handle);

});

