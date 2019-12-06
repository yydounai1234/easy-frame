const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    watch: true,
    devtool: "inline-source-map", 
    entry: "./src/easy.ts",
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        libraryTarget: "umd",
        library: 'easy',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        historyApiFallback: true, 
        hot: true,
    }
}