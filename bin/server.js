(function(){
  var express, http, path, app, exports;
  express = require('express');
  http = require('http');
  path = require('path');
  app = express();
  app.get('/', function(req, res){
    res.render('index.html');
  });
  exports = module.exports = app;
}).call(this);
