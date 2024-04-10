//path module, default with node.js
const path = require('path');

module.exports = {
    //define entry point
    entry: './src/index.ts',

    //define output
    output: {
        //'./public/bundle.js',
        filename: 'bundle.js',

        //requires an absolute path, not a relative path
        path: path.resolve(__dirname, 'public')
        },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader', 
            }
        ]
        loaders: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
            
            }
        ]

    }







}