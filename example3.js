//importing module

var http = require('http');
var dt = require('./mymodule');

var date = dt.myDateTime()

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + date.getDate());
  //res.write(req.url);
  res.end();
}).listen(8080); 