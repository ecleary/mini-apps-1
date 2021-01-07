const model = require('../model/model.js');

module.exports.getData = (req, res, next) => {
  const {id} = req.params;
  model.getData(id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.postData = (req, res, next) => {
  const {type} = req.query;
  const data = req.body;
  model.postData(type, data, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

module.exports.patchData = (req, res, next) => {
  const {id} = req.params;
  const {type} = req.query;
  const data = req.body;
  model.patchData(id, type, data, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};
