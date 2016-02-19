var repo = require("./repo");

var successCode = 200;
var errorCode = 500;

function get(response, postData, queryParameter) {
  console.log("Request handler 'get' was called with query param : " + queryParameter);

  repo.get(queryParameter, function(err, result) {
  		if(err) {
  			console.log(err);
  			process(response,errorCode, JSON.stringify(err));
  		}
  		else {
  			console.log("Result: Book with id : " + queryParameter + " was found!");
  			process(response,successCode, JSON.stringify(result));
  		}
  });
}

function update(response, postData, queryParameter) {
  console.log("Request handler 'update' was called");

  repo.update(JSON.parse(postData), function(err, result) {
  		if(err) {
  			console.log(err);
  			process(response,errorCode, JSON.stringify(err));
  		}
  		else {
  			console.log("Result: Book with id : " + JSON.parse(postData)._id + " was successfully updated!");
  			process(response,successCode, "Result: Book with id : " + JSON.parse(postData)._id + " was successfully updated!");
  		}
  });
}

function insert(response, postData, queryParameter) {
  console.log("Request handler 'create' was called");

  repo.insert(JSON.parse(postData), function(err, result) {
  		if(err) {
  			console.log(err);
  			process(response,errorCode, JSON.stringify(err));
  		}
  		else {
  			console.log("Result: Book with id : " +  JSON.parse(postData)._id + " was successfully created!");
  			process(response,successCode, "Result: Book with id : " +  JSON.parse(postData)._id + " was successfully created!");
  		}
  });
}

function remove(response, postData, queryParameter) {
  console.log("Request handler 'delete' was called with query param : " + queryParameter);

   repo.remove(queryParameter, function(err, result) {
  		if(err) {
  			console.log(err);
  			process(response,errorCode, JSON.stringify(err));
  		}
  		else { 
  			console.log("Result: Book with id : " + queryParameter + " was successfully removed!");
  			process(response,successCode, "Result: Book with id : " + queryParameter + " was successfully removed!");
  		}
  });
}

function process (response,code, body) {
  response.writeHead(code, {"Content-Type": "text/html"});
  response.write(body);  
  response.end();
}

exports.get = get;
exports.update = update;
exports.insert = insert;
exports.remove = remove;