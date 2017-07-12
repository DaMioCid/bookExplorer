import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractHTML = new ExtractTextPlugin({ filename: '[name].html' });
const extractCSS = new ExtractTextPlugin({ filename: '[name].css' });

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        openPage: '',
        port: 9623
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: extractHTML.extract({
                use: ['html-loader']
            })
        }, {
            test: /\.sass$/,
            use: extractCSS.extract({
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015', 'react'
                    ]
                }
            }]
        }]

    },
    plugins: [
        extractHTML,
        extractCSS,
        new webpack.HotModuleReplacementPlugin()
    ]
}

export default config;