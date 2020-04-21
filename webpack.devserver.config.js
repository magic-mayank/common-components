const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const configrules = require('./wconfig-rules.js');


const serverConfig = {
  devtool: 'source-map',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    disableHostCheck: true,
  },
};

const libConfig = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'lib.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: configrules,
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
};

module.exports = [serverConfig, libConfig];
