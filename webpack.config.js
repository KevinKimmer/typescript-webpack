//path module, default with node.js
const path = require('path');

module.exports = {
    //define entry point
    entry: './src/index.ts',

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },

    //define output
    output: {
        //tells the dev server where to serve code storred in memory 
        publicPath: 'public',

        //'./public/bundle.js',
        filename: 'bundle.js',

        //requires an absolute path, not a relative path
        path: path.resolve(__dirname, 'public')
    }









}