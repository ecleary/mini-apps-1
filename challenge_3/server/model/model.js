const {connection, Checkout, mysql} = require('../../database');

module.exports.postData = (type, data, callback) => {
  Checkout.create({[type]: data}, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

module.exports.patchData = (id, type, data, callback) => {
  Checkout.updateOne({_id: id}, {[type]: data}, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};
