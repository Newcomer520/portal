var path = require('path');
module.exports = function(options) {
	return {
		//entry: ['./src/main.jsx'],
		entry: {
			'main-ng': './src/main-ng.js',
			'main-react': './src/main.jsx'
		},
		module: {
			loaders: [
				{ test: /\.css$/, loader: 'style-loader!css-loader'},
				{ test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded'},
				{ test: /\.jsx$/, loader: 'jsx-loader'},
				{ test: /\.html$/, loader: "ng-cache"}
			]
		},
		output: {
			path: path.join(__dirname, "build"),
			publicPath: "build/",
			filename: "[name].bundle.js",
			chunkFilename: "[id].bundle.js"
			//chunkFilename: "[chunkhash].js"
		},
		externals: {
			jquery: "jQuery",
			angular: "angular",
			underscore: "underscore"
		},
		node: {
		  'pages//App_Themes//image//VER.png': "empty"
		},
		//devtool: "#source-map",
		devtool: "#inline-source-map",
		debug: options.debug? true: false,
		watch: true,
		target: 'web'
	}	
}

