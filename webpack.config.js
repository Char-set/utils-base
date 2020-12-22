const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')
module.exports = {
	mode: 'none',
	entry: {
		'utils-base':'./src/index.js',
		'utils-base.min':'./src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js",
		library:'utilsBase',
		libraryTarget:'umd',
		libraryExport:'default'
	},
	optimization: {
		minimize: true,
		minimizer:[
			new TerserPlugin({
				include: /\.min\.js$/,
			})
		]
	}
};