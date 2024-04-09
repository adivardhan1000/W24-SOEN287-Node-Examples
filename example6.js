//playing with url strings

var http = require('http');
var url = require('url');
var output = `
<html>
    <title>First Node Project</title>
    <body>
        <h1>User queried: QUERY</h1>
    </body>
</html>
`;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(req);
  console.log("------------------------------------");
  console.log(req.url);
  console.log("------------------------------------");
  console.log(url.parse(req.url, true));
  console.log("------------------------------------");
  var q = url.parse(req.url, true).query;
  console.log(q);
  var txt = q.day + " " + q.month;
  output = output.replace("QUERY",txt)
  res.end(output);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July