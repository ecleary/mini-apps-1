const express = require('express');
const path = require('path');

const app = express();
const port = '3000';

app.use('/', express.static(path.join(path.dirname(__filename), '../public')));

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is now listening at http://localhost:${port}`);
  }
});
