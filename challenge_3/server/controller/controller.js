const model = require('../model/model.js');

module.exports.postData = (req, res, next) => {
  const postData = req.body;
  model.postData(postData, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};