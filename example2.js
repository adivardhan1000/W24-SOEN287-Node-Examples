// var http = require('http');
// var output = `
// <html>
//     <title>First Node Project</title>
//     <body>
//         <h1>Rendering my html page</h1>
//     </body>
// </html>
// `;
// 
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); // Change content type to 'text/html'
//   res.end(output); // Send the HTML content in the response
// }).listen(8080);


module.exports = function(req, res) {
  var output = `
  <html>
      <title>First Node Project</title>
      <body>
          <h1>Rendering my html page</h1>
      </body>
  </html>
  `;

  res.writeHead(200, {'Content-Type': 'text/html'}); // Change content type to 'text/html'
  res.end(output); // Send the HTML content in the response
};
