const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
	mode: 'development',
	devServer: {
		port: 4103
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'items',
			filename: 'remoteEntry.js',
			exposes: {
				'./ItemsIndex': './src/index.js'
			},
		})
	]
}