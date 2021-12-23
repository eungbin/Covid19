const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'), // 결과물 경로
        filename: 'bundle.js', // 결과물 파일명
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        hot: true,
        devMiddleware: {
          writeToDisk: true,
        },
        client: {
          overlay: true,
        },
        port: 5500,
        host: "localhost"
    },
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: '/node_modules/',
            use: [
              'babel-loader',
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            // use: ['style-loader', 'css-loader'],
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(jpeg|jpg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };