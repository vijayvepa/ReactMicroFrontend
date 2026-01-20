# React Microfrontend

## Steps

- Designate one app as **Host** - [./container](./container/) and one app as **Remote** - [./products](./products/)

### Remote
- In the **Remote**, decide which modules are available to other projects
	- Setup *ModuleFederationPlugin* to expose those files

```js
		const HtmlWebpackPlugin = require('html-webpack-plugin')
		const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
		module.exports = {
			mode: 'development',
			devServer: {
				port: 4101 //--> remotePort
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: './public/index.html'
				}),
				new ModuleFederationPlugin({
					name: 'products', //--> "remoteName"
					filename: 'remoteEntry.js', //--> "remoteFile"
					exposes: {
						'./ProductsIndex': './src/index.js' //-->"remoteResource"
					},
				})
			]
		}
```
### Host
- In the **Host**, decide which modules to get from remote
- Setup *ModuleFederationPlugin* to fetch those files
		```js
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
			//--- LOAD remote INTO container
			new ModuleFederationPlugin({
				name: 'container',
				remotes: {
					products: 'products@http://localhost:4101/remoteEntry.js'  //--> "remoteName@http://localhost:remotePort/remoteFile"
				},

			})
		]
	}
	```
	- Refactor the entry point to load asynchronously
(index.js)
```js
import('./bootstrap')
```
- Import the necessary files from the **Remote**
(bootstrap.js)
```js
import 'products/ProductsIndex' //--> remoteName/remoteResource
```
- Add necessary containers in HTML as needed
(index.html)
```html
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<h1>Products</h1>
		<table id="products-table"></table>
	</body>
</html>
```


