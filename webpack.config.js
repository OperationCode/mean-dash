var webpack = require('webpack')

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + './public',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate-loader!babel-loader', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css-loader', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!sass-loader', exclude: /node_modules/}
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/public'
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
  config.devtool = 'source-map'
}

module.exports = config
