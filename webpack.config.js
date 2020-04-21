const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const configrules = require('./wconfig-rules.js');

const distConfig = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
  ],
};

const npmLibConfig = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'main.js',
    libraryTarget: 'commonjs',
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

module.exports = [distConfig, npmLibConfig];
