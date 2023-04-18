const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.json());

// Use the morgan middleware to log requests
app.use(morgan('dev'));

// Create a route for handling post requests
app.post('/api/log', (req, res) => {
  console.log(req.body);
  if (req.body.payload.Input === 'Error') {
    res.status(403).end();
  } else {
    res.send('Post received');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
