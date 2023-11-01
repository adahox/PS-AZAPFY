const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    { 
                        loader: "css-loader", 
                        options: { 
                            sourceMap: true 
                        }
                    },
                    { 
                        loader: "postcss-loader",
                        options: { 
                            sourceMap: true 
                        } 
                    },
                    { 
                        loader: "sass-loader", 
                        options: { 
                            sourceMap: true 
                        } 
                    },
                ],
            }
        ]
    }
});