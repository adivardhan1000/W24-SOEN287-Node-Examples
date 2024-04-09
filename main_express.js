const express = require('express');
const app = express();
const path = require('path');

// Importing the modules for each example
const basicServer = require('./example1.js');
const importingModule = require('./example1.js');
const playingWithURLStrings = require('./example1.js');
const readingFromFileSystem = require('./example1.js');

// Define routes for each example
app.get('/basic_server', basicServer);
app.get('/importing_module', importingModule);
app.get('/playing_with_url_strings', playingWithURLStrings);
app.get('/reading_from_file_system', readingFromFileSystem);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index3.html'));
});

// Start the server
app.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
