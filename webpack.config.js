module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.jsx?/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
