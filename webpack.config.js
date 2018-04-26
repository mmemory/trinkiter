const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.app + '/trinkiter.js'
  },
  output: {
    path: PATHS.build,
    filename: "trinkiter.js"
  },
  watch: true,
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Trinkiter: trading your stuff, but fun'
    })
  ],
  module: {

    rules: [
      {
        test: /trinkiter.+\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]

  }
};