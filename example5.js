var http = require('http');

//fs : file system
// for other functions and usage: https://www.w3schools.com/nodejs/nodejs_filesystem.asp
var fs = require('fs');

var data = fs.readFileSync('index.html', function(err, data) {
    return data
  });

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}).listen(8080); 