const path = require('path');
const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
    ASSETS: path.resolve(__dirname, 'src/assets'),
}

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'nimbus.bundle.js',
    },
    devServer: {
        contentBase: paths.DIST,
        port: 9000,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'eval-source-map',
};
