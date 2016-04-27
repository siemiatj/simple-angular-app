const path              = require('path');
const webpack           = require('webpack');
const cwd = process.cwd();

const config = {
  entry: {
    app: './app/js/app.bundle.es6'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  noInfo: true,
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: [__dirname],
    //     exclude: [path.join(__dirname, './', 'node_modules')]
    //   }
    // ],
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: ['style', 'css', 'sass']
      // },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: 'style!css!autoprefixer?browsers=last 2 versions'
      // },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer!sass"
        }, {
            test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
            loader: 'file?name=fonts/[name].[ext]'
        }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

module.exports = config;
