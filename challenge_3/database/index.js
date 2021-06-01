const mongoose = require('mongoose');
const {Schema} = mongoose;

const host = 'localhost';
const port = '27017';
const database = 'multistepcheckout';
const uri = `mongodb://${host}:${port}/${database}`;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

let connection;
mongoose.connect(uri, options, (err) => {
  if (err) {
    console.error(err);
  } else {
    module.exports.connection = connection = mongoose.connection;
    console.log(`Connected to MongoDB with ID ${connection.id}`);
    connection.on('error', console.error);
    process.on('SIGINT', () => {
      const {pid} = process;
      connection.close();
      console.log(`\nMongoDB connection ID ${connection.id} has been closed`);
      console.log(`About to exit Node process ID ${pid}`);
      process.exit();
    });
  }
});

const checkoutSchema = new Schema({
  user: {
    name: {type: String},
    email: {type: String},
    password: {type: String}
  },
  address: {
    line1: {type: String},
    line2: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String}
  },
  wallet: {
    cardNumber: {type: String},
    expirationDate: {type: String},
    CVV: {type: String},
    billingZip: {type: String}
  }
});

module.exports.Checkout = mongoose.model('Checkout', checkoutSchema);

const mysql = require('mysql');
const password = require('./dbpassword.js');

module.exports.mysql = mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'multistepcheckout'
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    const {threadId} = mysqlConnection;
    console.log(`Connected to MySQL database with connection ID ${threadId}`);
    process.on('SIGINT', () => {
      const {pid} = process;
      mysqlConnection.end();
      console.log(`\nMySQL database connection ID ${threadId} has been closed`);
      console.log(`About to exit Node process ID ${pid}`);
      process.exit();
    });
  }
});
