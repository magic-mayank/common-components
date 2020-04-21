const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    use:
    {
      loader: 'babel-loader',
    },
  },
  { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
  { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
  { test: /\.css$/, use: ['style-loader', 'css-loader'] },
  {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'sass-loader',
    }],
  },
  {
    // font files
    test: /\.(ttf|eot|woff|woff2)$/,
    loader: 'url-loader',
    options: {
      limit: 40000,
      name: './fonts/[name].[ext]',
    },
  },
];

exports.default = rules;
module.exports = exports.default;
