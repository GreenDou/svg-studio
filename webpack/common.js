const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

/*
 * We've enabled Postcss, autoprefixer and precss for you. This allows your app
 * to lint  CSS, support variables and mixins, transpile future CSS syntax,
 * inline images, and more!
 *
 * To enable SASS or LESS, add the respective loaders to module.rules
 *
 * https://github.com/postcss/postcss
 *
 * https://github.com/postcss/autoprefixer
 *
 * https://github.com/jonathantneal/precss
 *
 */

const cssnext = require('postcss-cssnext');

module.exports = {
	entry: './src/index',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1,
							module: true,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [cssnext];
							}
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV !== 'production',
		}),
		// TODO Add it to prod
    // new UglifyJSPlugin(), 
    new HTMLPlugin({
      template: './src/index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
