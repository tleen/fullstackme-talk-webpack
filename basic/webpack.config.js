module.exports = {
  entry: ['.'],
  exclude: /node_modules/,
  output: {
    //    path: path.join(__dirname, 'dist'),
    path: __dirname,
    filename: 'bundle.js'
  }
}
