var path = require('path');
var assign = require('object-assign');
var webpack = require('webpack');

module.exports = function(options) {
	return assign({
		context: path.join(__dirname, 'src'),
		entry: {
			'main-ng': './main-ng.js',
			'main-02': './main.jsx'
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
			publicPath: "local/build/",
			filename: "[name].bundle.js",
			chunkFilename: "[id].bundle.js"
			//chunkFilename: "[chunkhash].js"
		},
		resolve: {
			//root: [__dirname],
			alias:{
				svgfolder: path.join(__dirname, 'src/svg2json'),
				'my-react': path.join(__dirname, 'src/react')
				//'svg2json':'../../../../svg2json', //this ok
				//'svg2json': '/src/svg2json'
			},
			//modulesDirectories: ["web_modules", "node_modules", 'svg2json']
			//root: ['/svg2json']
		},
		externals: {
			jquery: "jQuery",
			angular: "angular"//,
			//underscore: "underscore"
		},
		node: {
		  'pages//App_Themes//image//VER.png': "empty"
		},
		//devtool: "#source-map",
		debug: false,
		watch: false,
		plugins:[new webpack.optimize.UglifyJsPlugin()],
		target: 'web'
	}, options);
}

