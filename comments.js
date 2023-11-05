//Create a web server

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set up the static directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up the route for the comments form
app.post('/comments', (req, res) => {
  res.send('POST request to the homepage');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});