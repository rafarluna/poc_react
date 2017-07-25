module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
