const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './../demo/index',
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: 'bundle-[name].js',
    sourceMapFilename: 'bundle-[name].js.map',
    pathinfo: true,
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: 'module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
