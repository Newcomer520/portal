require! <[gulp gulp-compass gulp-changed path]>
minifyCSS = require 'gulp-minify-css'

paths = 
	compass:
		watch: 'compass/sass/*.scss'
		project: path.join __dirname, 'compass'
		dest: '//tnvcmipad/d$/ApplicationSystem/inip/local'


gulp.task 'default', <[watch-sass]>

gulp.task 'build-compass', ->	
	gulp.src paths.compass.watch
		.pipe gulp-changed paths.compass.dest
		.pipe gulp-compass do
			project: paths.compass.project
			sass: 'sass'
		.on 'error', console.log
		.pipe minifyCSS!
		.pipe gulp.dest paths.compass.dest


gulp.task 'watch-sass', !->
	gulp.watch 'compass/sass/*.*', <[build-compass]>