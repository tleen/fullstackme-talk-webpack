module.exports = {
  entry: ['.'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
	test: /\.js$/,
	loader: 'babel',
	query: {
	  presets: ['es2015']
	}
      }
    ]
  }
}
