const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const miniCssPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new miniCssPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader:  miniCssPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
        ]
    }
});