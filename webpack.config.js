//path module, default with node.js
const path = require('path');


module.exports = {
    devtool: 'eval-source-map',
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
    //allows import
    resolve: {
        extensions: ['.ts', '.js']
    },

    //define output
    output: {


        //'./public/bundle.js',
        filename: 'bundle.js',

        //requires an absolute path, not a relative path
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      }









}