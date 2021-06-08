const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes');
// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Use routes
app.use('/', routes());

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
