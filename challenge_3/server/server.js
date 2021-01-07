const express = require('express');
const path = require('path');
const controller = require('./controller/controller.js');

const app = express();
const port = '3000';

app.use('/', express.static(path.join(__dirname, '../public/')));

app.use('/data', express.urlencoded({extended: false}));

app.get('/data/:id', controller.getData);
app.post('/data', controller.postData);
app.patch('/data/:id', controller.patchData);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is now listening on http://localhost:${port}`);
  }
});