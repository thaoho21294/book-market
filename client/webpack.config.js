const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env'),
})

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
    mode: isDevelopment ? 'development' : 'production',
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: resolveApp('src'),
          loader: 'ts-loader',
        },
        // addition - add source-map support
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'source-map-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: isProduction },
            },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed),
        'process.env.NODE_ENV': JSON.stringify(
          isDevelopment ? 'development' : 'production',
        ),
      }),
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
    ],
  }
}
