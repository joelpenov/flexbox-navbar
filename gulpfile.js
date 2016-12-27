var gulp = require("gulp");
var prefixer = require("gulp-autoprefixer");

var cssUrl = "css/style.css";

gulp.task("renderstyle", function(){
	gulp.src(cssUrl)
	.pipe(prefixer())
	.pipe(gulp.dest("build"));
});


gulp.task("watcher", function(){
	gulp.watch(cssUrl, ["renderstyle"]);
});