<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	devServer: {
		port: 4101
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
=======
module.exports = {
		mode: 'development'
>>>>>>> 853ae2b25ab7366e3049f50586db127f2c055f35
}