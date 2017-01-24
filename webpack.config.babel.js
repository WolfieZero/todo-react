// =============================================================================
// Webapack Config
// =============================================================================


import webpack from 'webpack';
import path from 'path';

const PORT = 3000;


/**
 * @see  https://webpack.js.org/configuration/
 */
export default {

    devtool: 'source-maps',

    entry: [
        './app/index'
    ],

    output: {
        filename: 'app.js',
        publicPath: '/',
        path: path.join(__dirname, 'public')
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        port: PORT
    },

    module : {
        rules : [
            // JS
            {
                test: /\.js|.jsx?$/,
                include: path.join(__dirname, 'app'),
                exclude: path.join(__dirname, 'app/vendor'),
                loaders: ['react-hot-loader', 'babel-loader']
            },
            // CSS
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]

};
