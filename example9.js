var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      var sum = 0;

      // Read file line by line
      var data = fs.readFileSync(oldpath, 'utf8').split('\n');
      data.forEach(function(line) {
        sum += parseFloat(line) || 0; // Parse line as float, default to 0 if NaN
      });

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Sum of numbers in file: ' + sum);
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
