const path = require('path');

module.exports = {
  entry: path.join(path.dirname(__filename), './client/app.jsx'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        // test: /\.jsx(?!.)/,
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development'
};
