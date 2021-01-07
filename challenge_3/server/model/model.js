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
