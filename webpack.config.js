const { resolve } = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (options = {}) => {
    let re = {
        entry: {
            index: './src/index.jsx',
            vendor: ['echarts', 'babel-polyfill', 'superagent', 'react', 'react-dom', 'redux', 'redux-thunk', 'react-redux', 'react-router-dom']
        },
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'javascripts/index-[hash].js',
            chunkFilename: 'javascripts/[id].js?[chunkhash]'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    loader: [
                        'style-loader',
                        'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                        'less-loader'
                    ]
                },
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: [
                        'babel-loader',
                        'eslint-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'images/[name]-[hash:5].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(doc|pdf)$/,
                    loader: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1,
                                name: 'dist/images/王恩智-前端开发.[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        performance: {
            hints: options.dev ? false : 'warning'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor', // 指定公共 bundle 的名字。
                filename: '[name].js'
            }),
            new htmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html'
            })
        ]
    };
    if (options && !options.dev) {
        re.plugins.push(new CleanWebpackPlugin('dist'));
        return re;
    }
    return re;
};