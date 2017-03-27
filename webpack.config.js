var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, './bower_components/jquery/jquery.js')
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {
        test: require.resolve('./bower_components/jquery/jquery.js'),
        loader: "expose-loader?$!expose-loader?jQuery"
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  }
}