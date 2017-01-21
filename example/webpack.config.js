const webpack = require('webpack');
const path = require('path');

const resolve = path.resolve;

module.exports = env => {
  const ifProd = (...args) => env.prod ? args : [];
  const ifDev = (...args) => env.dev ? args : [];

  return {
    entry: {
      app: [
        ...ifDev(
          'react-hot-loader/patch',
          'webpack-hot-middleware/client'
        ),
        './../example/index',
      ],
      vendor: ['react', 'react-dom'],
    },
    output: {
      filename: 'bundle-[name].js',
      sourceMapFilename: 'bundle-[name].js.map',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
      publicPath: '/static/',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
      ...ifDev(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ),
      ...ifProd(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true
        })
      )
    ],
    devtool: env.prod ? 'source-map' : 'module-eval-source-map',

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
};
