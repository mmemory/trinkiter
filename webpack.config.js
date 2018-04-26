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
      template: PATHS.app + '/index.template.html'
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