var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    target: 'node',
	output: {
		filename: "./assets/bundle.js",
    },
    devServer: {
        inline: true,
        //contentbase : "./dist",
        contentBase: path.join(__dirname, 'public'),
        port : 3000
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader: 'babel-loader',
                query : {
                    presets: ["env"]
                }
            },
            {
                test : /\.json$/,
                exclude : /node_modules/,
                loader: 'json-loader'
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'postcss-loader']
            }
        ]
    }
}