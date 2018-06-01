var gulp = require('gulp')
watch = require('gulp-watch')

gulp.task('default', function() {
	console.log("Hooray -- you created a Gulp task.")
})

gulp.task('html', function() {
	console.log("Imagine that this is doing some very useful and important!")
})

gulp.task('styles', function() {
	console.log("Imagine SASS or PostCSS tasks running here")
})

gulp.task('watch', function() {

	watch('./app/index.html', function() {
		gulp.start('html')
	})

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	})

})