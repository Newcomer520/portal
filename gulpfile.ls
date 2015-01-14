require! <[gulp gulp-compass gulp-changed path run-sequence gulp-sass]>
template-cache = require 'gulp-angular-templatecache'
minifyCSS = require 'gulp-minify-css'
rename = require 'gulp-rename'

paths = 
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
		\build-compass
		\build-ng-template
		\watch-sass
		\watch-ng-template

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


gulp.task 'watch-sass', !->
	gulp.watch 'compass/sass/*.*', <[build-compass]>

gulp.task 'watch-ng-template', ->	
	gulp.watch paths.template.src, <[build-ng-template]>		

gulp.task 'build-ng-template', ->
	console.log 'building template'
	gulp.src paths.template.src
	.pipe template-cache!
	.pipe gulp.dest paths.template.dest	