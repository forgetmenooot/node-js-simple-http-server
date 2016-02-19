# node-js-simple-http-server

Simple http server implementing crud operations on book entity

Execute:
1)Install npm, node, mongodb
2)In working directory execute: npm install
3)In working directory execute: node index.js

Examples of requests:

curl -i -H 'Content-Type: application/json' -d  '{"_id":"5063114bd386d8fadbd6b004", "name" : "book1", "authors" : [{"name":"author15"}, {"name":"author2"}], "cost" : 30, "count" : 6}' -X POST http://localhost:8080/book
curl -i -H 'Content-Type: application/json' -d  '{"_id":"5063114bd386d8fadbd6b004", "name" : "book1", "authors" : [{"name":"author15"}, {"name":"author2"}], "cost" : 22, "count" : 18}' -X PUT http://localhost:8080/book
curl -i -X DELETE http://localhost:8080/book/5063114bd386d8fadbd6b004
curl -i -X GET http://localhost:8080/book/5063114bd386d8fadbd6b004
