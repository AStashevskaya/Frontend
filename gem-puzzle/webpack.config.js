const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, options) => {
    const isProduction = options.mode === 'production'

    const config = {
        mode: isProduction ? 'production' : 'development',
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                // JavaScript
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                    // CSS, PostCSS, Sass
                {
                    test: /\.(scss|css)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader',  'sass-loader'],
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  },
                  {
                    test: /\.html$/i,
                    loader: 'html-loader',
                }
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Gem-puzzle',
                template: path.resolve(__dirname, './src/index.html'), 
                filename: 'index.html',
            }), 
            new MiniCssExtractPlugin({
                // filename: 'main.[chunkhash].css'
                filename: 'style.css'
            })
        ],
        
    }
    return config
}