var CleanWebpackPlugin = require('clean-webpack-plugin')
var port = 8080

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'babel-polyfill',
        __dirname + '/src/index.dev.js',
    ],
    
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js',
    },

    devtool: 'eval',
    
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    
    devServer: {
        contentBase: __dirname + '/public',
        historyApiFallback: true,
        host: '0.0.0.0',
        inline: true,
        port: port,
        open: true,
        hot: true
    },

    plugins: [
        new CleanWebpackPlugin(['css/main.css', 'css/main.css.map', 'js/bundle.js', 'js/bundle.js.map'], {
            root: __dirname + '/public',
            verbose: true,
            dry: false,
        }),
    ],
}