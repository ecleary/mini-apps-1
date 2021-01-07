const {connection, Checkout, mysql} = require('../../database');

module.exports.postData = (data, callback) => {
  Checkout.create({user: data}, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  });
};

module.exports.patchData = (id, type, data, callback) => {
  Checkout.updateOne({_id: id}, {[type]: data}, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  });
};
