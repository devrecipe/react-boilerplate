var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = require('./webpack.config.js')

module.exports.entry = [
    __dirname + '/src/index.prod.js'
]

module.exports.devtool = 'source-map'

module.exports.plugins.push(new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production'), } }))

module.exports.module.rules = [
    {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
    }
]

module.exports.plugins.push(
    new ExtractTextPlugin('../css/main.css')
)
