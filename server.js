var http = require("http");

function start(route, handle) {

    function onRequest(request, response) {
      var postData = "";
      var url = request.url;
      var method = request.method;

      request.setEncoding("utf8");

      request.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
      });

      request.addListener("end", function() {
        console.log("Request for " + url + " received with method " + method + " and post data :" + postData);
        route(handle, url, method, response, postData);
      });
      
    }
  
  http.createServer(onRequest).listen(8080);

  console.log("Server is listening...");
}

exports.start = start;