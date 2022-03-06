var http = require("http");
var express = require("express");
var app = express();
var fs = require("fs");
app.get("/products", function (req, res) {
  fs.readFile(
    __dirname + "/" + "responseData/products.json",
    "utf8",
    function (err, data) {
      //console.log(data);
      res.end(data);
    }
  );
});
app.get("/starProducts", function (req, res) {
  fs.readFile(
    __dirname + "/" + "responseData/starProduct.json",
    "utf8",
    function (err, data) {
      //console.log(data);
      res.end(data);
    }
  );
});
app.get("/movieProducts", function (req, res) {
  fs.readFile(
    __dirname + "/" + "responseData/movieProduct.json",
    "utf8",
    function (err, data) {
      //console.log(data);
      res.end(data);
    }
  );
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  //console.log("APU listening port ", host, port);
});
