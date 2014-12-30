var gulp = require("gulp");
var uglify = require("gulp-uglify");
// var minifycss = require("gulp-minify-css");
// var rename = require("gulp-rename");
// var autoprefixer = require("gulp-autoprefixer");
var livereload = require("gulp-livereload");
// var base64 = require("gulp-base64");
// var spritesmith = require('gulp.spritesmith');
// var compass = require('gulp-compass');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');
var watch = require('gulp-watch');

// gulp.task("css",function(){
// 	return gulp
// 		.src("public/css/*.css")
// 		.pipe(autoprefixer('last 2 version'))
// 		.pipe(minifycss())
// 		.pipe(rename({suffix: '.min'} ))
// 		.pipe(gulp.dest("public/build/css"));
// })


//默认启动任务
gulp.task("default",function(){
	gulp.run("html2js");
	gulp.run("scripts");
	gulp.run("watch");

});

gulp.task('html2js', function() {
  gulp.src('public/js/**/*.html')
    .pipe(html2js({
       outputModuleName: 'app-template',
       base:"public/js"
    }))
    .pipe(concat('template.js'))
    .pipe(gulp.dest('public/dist/'))
})

gulp.task('scripts', function() {
  gulp.src([
  	"jquery/dist/jquery.min.js",
  	'node_modules/angular/angular.js',
  	"node_modules/angular-ui-router/release/angular-ui-router.min.js",
  	
  	'public/router.js',
  	'public/app.js',
  	'public/js/**/*.js',
  	])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('public/dist/'))
})

//合并压缩js
gulp.task('uglify', function() {
	return gulp
	  	.src('public/js/**/*.js')
	  	.pipe(concat("app.min.js"))	
	  	.pipe(gulp.dest('public/build/js'));
});

//编译scss文件
gulp.task('compass', function() {
	return gulp
	  	.src('public/sass/*.scss')
	  	.pipe(compass({
	    	config_file: 'public/config.rb',
	    	css: 'public/stylesheets',
	    	sass: 'public/sass'
	  	}))
	  	.pipe(gulp.dest('public/stylesheets'));
});

//图片sprite任务
gulp.task('sprite', function () {
  var spriteData = gulp.src('public/img/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm:'',
    cssTemplate:'public/build/css/sp.css'
  }));
  spriteData.img.pipe(gulp.dest('public/build/img/'));
  spriteData.css.pipe(gulp.dest('public/build/css/'));
});

//gulp监听任务，任何js或css改变时执行
gulp.task("watch",function(){	
	// gulp.watch("public/sass/**/*.scss",["compass"]);
	// gulp.watch("public/js/**/*.js",["uglify"]);
	// gulp.watch("public/js/**/*.html",["html2js"]);
	// gulp.watch("public/js/**/*.js",["scripts"]);

	// var sever = livereload();
	// gulp.watch(["public/js/**/*.html"]).on("change",function(file){
	// 	sever.changed(file.path);
	// });
	watch('public/js/**/*.js',function(){
		gulp.start('scripts');
	})
	watch('public/js/**/*.html',function(){
		gulp.start('html2js');
	})
})

