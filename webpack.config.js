const path              = require('path');
const webpack           = require('webpack');
const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.resolve(__dirname, 'public'),
  assets: path.join(__dirname, 'app/assets')
};

const config = {
  entry: {
    app: './app/js/app.bundle.es6'
  },
  output: {
    path: PATHS.public,
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
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: 'style!css!autoprefixer?browsers=last 2 versions'
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   exclude: [/node_modules/, /assets/],
      //   loader: 'file-loader'
      // },
      // {
      //   test: /\.svg|png|jpg$/,
      //   loader: 'file?name=images/[name].[ext]'
      // },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file?name=assets/[name].[ext]',
      //   include: PATHS.assets
      // },
      {
        test: /\.svg$/,
        loader: 'file',
        include: PATHS.assets
      },
      // { 
      //   test: /\.(png|jpg)$/, 
      //   loader: 'url-loader?limit=8192' 
      // },
      {
        test: /\.css$/,
        loader: 'style!css'
      }, 
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + PATHS.app + '/!html'
      },
        // {
        //     test: /\.scss$/,
        //     loader: "style!css!sass"
        // }, 
      {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
        loader: 'file?name=fonts/[name].[ext]',
        include: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

module.exports = config;
