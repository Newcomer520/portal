require! <[gulp gulp-compass gulp-changed path run-sequence gulp-sass]>
template-cache = require 'gulp-angular-templatecache'
minifyCSS = require 'gulp-minify-css'
rename = require 'gulp-rename'
xml2json = require 'gulp-xml2json'
svgParser = require 'svg-parser'
webpack = require('gulp-webpack')
cache = require('gulp-cached')

paths = 
	svg:
		src: 'not-version-controlled/svg/**/*.svg'
		dest: './src/svg2json'
	dest: '//tnvcmipad/d$/ApplicationSystem/inip/local/build'
	compass:
		watch: 'compass/sass/*.scss'
		project: path.join __dirname, 'compass'
		dest: '//tnvcmipad/d$/ApplicationSystem/inip/local/'
		#dest: '\\\\tnvcmipad\\d$\\ApplicationSystem\\inip\\local'
	template:
		src: './template/*.html'
		dest: '//tnvcmipad/d$/ApplicationSystem/inip/local'


#gulp.task 'default', <[watch-sass]>
gulp.task 'default', ->
	run-sequence do
		#\build
		#\build-ng-template
		\watch-sass
		\watch-svg
		\dev-src		
		#\watch-ng-template

gulp.task 'build', <[build-compass build-src parse-svg]>

gulp.task 'build-compass', ->	
	console.log 'building sass....'
	console.log paths.compass.dest
	gulp.src paths.compass.watch
		#.pipe gulp-changed paths.compass.dest
		.pipe gulp-compass do
			#config_file: './compass/config.rb'
			css: 'compass/stylesheetss'
			#css: paths.compass.dest
			sass: 'compass/sass'
			#project: paths.compass.project
		.on 'error', console.log
		.pipe minifyCSS!
		.pipe rename (p) !->
			p.dirname = './'
		.pipe gulp.dest paths.compass.dest

gulp.task 'build-dev-src', ->
	w = require('webpack')
	console.log 'build src...'
	webpackConfig = require('./webpack.config.js') do
		debug: false
		watch: false
		plugins: []
	gulp.src('src/main.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(paths.dest))

gulp.task 'build-src', ->
	w = require('webpack')
	console.log 'build src...'
	webpackConfig = require('./webpack.config.js') do
		debug: false
		watch: false


	gulp.src('src/main.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(paths.dest))


gulp.task 'dev-src', ->
	
	#optimize-plugin = require("webpack/lib/optimize/UglifyJsPlugin");
	webpackConfig = require('./webpack.config.js') do
		debug: true
		watch: true
		devtool: '#inline-source-map'
		plugins: []
		#plugins: [new optimize-plugin {minimize: true}]
	
	gulp.src('src/main.jsx')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(paths.dest))

gulp.task 'parse-svg', ->
	console.log 'parsing svg..'
	gulp.src paths.svg.src
		.pipe cache 'svg-parsing'
		.pipe svgParser!
		.pipe rename {extname: '.js'}
		.pipe gulp.dest paths.svg.dest

gulp.task 'watch-svg', ->
	gulp.watch paths.svg.src, <[parse-svg]>

gulp.task 'watch-sass', !->
	console.log 'watching-sass'
	gulp.watch 'compass/sass/*.*', <[build-compass]>

gulp.task 'watch-ng-template', ->	
	gulp.watch paths.template.src, <[build-ng-template]>		

gulp.task 'build-ng-template', ->
	console.log 'building template'
	gulp.src paths.template.src
	.pipe template-cache!
	.pipe gulp.dest paths.template.dest	