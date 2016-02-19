function route(handle, url, method, response, postData) {
  console.log("Routing a request for " + url);

  var pathname = "/" + url.split("/")[1];
  var queryParameter = url.split("/")[2];
  var searchHandle = pathname + "_" + method;

  if (typeof handle[searchHandle] == 'function') {
    handle[searchHandle](response, postData, queryParameter);
  } else {
    console.log("No request handler found for " + url + " and method " + method);

    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Request can't be processed. Not found!");
    response.end();
  }
}

exports.route = route;