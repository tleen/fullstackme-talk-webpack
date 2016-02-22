var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['.'],
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
	test: /\.scss$/,
	loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [   
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'index.html')
    })
  ]
}
