const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
	mode: 'development',
	devServer: {
		port: 4100
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:4101/remoteEntry.js',
				items: 'items@http://localhost:4103/remoteEntry.js',
				cart: 'cart@http://localhost:4102/remoteEntry.js',
			}
		}),

	]
}