const http = require('http');
const fs = require('fs');
const path = require('path');

// Importing the modules for each example
const basicServer = require('./example1.js');
const importingModule = require('./example2.js');
const playingWithURLStrings = require('./example1.js');
const readingFromFileSystem = require('./example1.js');

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the index.html file
    fs.readFile(path.join(__dirname, 'index3.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/basic_server') {
    basicServer(req, res);
  } else if (req.url === '/importing_module') {
    importingModule(req, res);
  } else if (req.url === '/playing_with_url_strings') {
    playingWithURLStrings(req, res);
  } else if (req.url === '/reading_from_file_system') {
    readingFromFileSystem(req, res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Start the server
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
