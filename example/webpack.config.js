const webpack = require('webpack');
const path = require('path');

const resolve = path.resolve;

module.exports = (env) => {
    const ifProd = (...args) => env.prod ? args : [];
    const ifDev = (...args) => env.dev ? args : [];

    return {
        entry: {
            app: [
                ...ifDev(
                    'react-hot-loader/patch',
                    'webpack-hot-middleware/client'
                ),
                './index',
            ],
        },
        context: resolve(__dirname, 'src'),
        output: {
            filename: 'bundle-[name].js',
            sourceMapFilename: 'bundle-[name].js.map',
            pathinfo: env.dev,
            path: resolve(__dirname, 'dist'),
            publicPath: '/dist/',
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
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
                    sourceMap: true,
                })
            ),
        ],
        devtool: env.prod ? 'source-map' : 'module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    include: resolve(__dirname, 'src'),
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
