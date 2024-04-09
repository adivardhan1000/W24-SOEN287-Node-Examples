//playing with url strings

var http = require('http');
var url = require('url');
var html_start = `
<html><head>
    <title>First Node Project</title>
    </head>    
    <body>
        <h1>Date queried: 
`;

var html_end = `
</h1>
    </body>
</html>
`;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("Req url",req.url);
  var q = url.parse(req.url, true).query;
  console.log("Query:",q);
  var txt = q.day + " " + q.city;
  output = html_start + txt + html_end
  res.end(output);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July