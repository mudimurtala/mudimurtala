const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,   // Look for .css files
        use: ['style-loader', 'css-loader'],  // Use these loaders
      },
      {
        test: /\.js$/,  // Look for .js files
        exclude: /node_modules/,  // Exclude node_modules folder
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Specify your HTML template
    }),
  ],
  mode: 'development',  // Set to development mode
};
