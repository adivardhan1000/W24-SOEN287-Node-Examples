//taking input from form
var http = require('http');
var url = require('url');
var querystring = require('querystring');
const html_form = `
<form method="POST" action="/">
<input type="text" name="num1" placeholder="Enter first number"><br>
<input type="text" name="num2" placeholder="Enter second number"><br>
<button type="submit">Add Numbers</button>
</form>
`

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html_form);
        res.end();
    } else if (req.method === 'POST') {
        var body = '';
        req.on('data', function(chunk) {
            console.log(chunk);
            body += chunk;
        });
        req.on('end', function() {
            
            var postData = querystring.parse(body);
            console.log(postData);
            var num1 = parseInt(postData.num1);
            var num2 = parseInt(postData.num2);
            var result = num1 + num2;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Result:</h1>');
            res.write('<p>' + num1 + ' + ' + num2 + ' = ' + result + '</p>');
            res.end();
        });
    }
});

server.listen(8080, function() {
    console.log('Server is running on port 8080');
});
