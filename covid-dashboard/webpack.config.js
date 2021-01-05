const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const isProd = options.mode === 'production';

  const config = {
    mode: isProd ? 'production' : 'development',
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '',
      filename: '[name].bundle.js',
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    // resolve: {
    //     extensions: ['.js']
    //   },
    module: {
      rules: [
        // JavaScript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        // CSS, PostCSS, Sass
        {
          test: /\.(scss|css)$/,
          // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(woff|woff2|ttf)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          test: /\.(png|svg|jpeg|gif|jpg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'English-for-kids',
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './src/assets',
            to: 'assets',
          },
          // {
          //   from: './src/assets/sounds',
          //   to: 'assets/sounds',
          // },
        ],
      }),
      new MiniCssExtractPlugin({
        // filename: 'main.[chunkhash].css'
        filename: isProd ? '[name].[contenthash].css' : '[name].css',
      }),
    ],

  };
  return config;
};
