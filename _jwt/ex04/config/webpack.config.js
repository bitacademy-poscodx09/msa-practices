const path = require('path');

module.exports = (env) => ({
    mode: "none",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('../backend/public/'),
        filename: 'js/main.js',
        assetModuleFilename: 'images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }, {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                'style-loader',
                {loader: 'css-loader', options: {modules: true}},
                'sass-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                configFile: path.resolve('config/babel.config.json')
            }
        }]
    },
    devtool: "eval-source-map",
    devServer: {
        host: "0.0.0.0",
        port: 9090,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }    
});