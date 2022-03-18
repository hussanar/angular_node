// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.write("hi world its me hussain");
//     res.end("thank you");
// }).listen(8080);
var http = require("http");
var fs = require("fs");
http.createServer(function(req, res) {
    fs.unlink("dummy.js", function(err) {
        if (err) {
            return console.log.error(err);
        }
        res.write("successfully");
        res.end();
    });
}).listen(8080);