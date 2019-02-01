const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    publicPath: '/',
    filename: 'app.bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{ loader: MiniCssExtractPlugin.loader}, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader}, 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.devServer = {
      inline: true,
      historyApiFallback: true
    }
  }
  if (argv.mode === 'production') {
    config.output.filename = '[name].[hash].js'
    config.optimization = {
      runtimeChunk: false,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCssAssetsPlugin({})
      ]
    }
  }

  return config
}