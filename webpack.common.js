const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./public/index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },
            { test: /\.ts$/, loader: "ts-loader", },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".html", ".png", ".jpeg", ".jpg"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};