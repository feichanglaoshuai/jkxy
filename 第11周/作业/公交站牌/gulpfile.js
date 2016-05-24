var gulp = require("gulp");
var sequence = require('gulp-sequence');
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var browserify = require("gulp-browserify");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var rev = require("gulp-rev");
var revcollector = require("gulp-rev-collector");
var minifyHtml = require("gulp-minify-html");
var del = require('del');
var livereload = require('gulp-livereload');

var allTmpDevPath = 'rev';
var allTmpDevFiles = 'rev/**/rev-manifest.json';

var imgSrcPath = 'images/**/';
var imgTmpPath = 'rev/img/';
var imgDestPath = 'build/images/';

var cssSrcPath = 'scss/**/';
var cssTmpPath = 'rev/css/';
var cssDestPath = 'build/css';

var jsSrcPath = 'modules/**/';
var jsTmpPath = 'rev/js/';
var jsDestPath = 'build/js';

var htmlSrcPath = '';
var htmlTmpPath = 'rev/html/';
var htmlDestPath = 'build/';


//复制第三方js
gulp.task('copyThirdJs', function(){
        return gulp.src('js/*.*')
            .pipe(gulp.dest('build/js'));//拷贝
    });

//图片压缩
gulp.task('zipImage', function(){
        return gulp.src(imgSrcPath + '*.*')
            .pipe(imagemin()) //压缩图片
            .pipe(rev()) //md5戳
            .pipe(gulp.dest(imgDestPath)) //发布
            .pipe(rev.manifest()) // 生成路径映射文件
            .pipe(gulp.dest(imgTmpPath)); //临时存储
    });

//CSS更新引用文件版本号
gulp.task('UpdateCss', function(){
        return gulp.src([allTmpDevFiles, cssSrcPath+'*.*'])
            .pipe(revcollector()) //文件名替换
            .pipe(gulp.dest(cssTmpPath)); //临时存储
    });

//CSS合并、压缩
gulp.task('zipCss', function(){
        return gulp.src(cssTmpPath+'*.*') //所有子目录的所有css文件
            .pipe(concat("index.css")) //css合并
            .pipe(sass({outputStyle: 'compressed'})) //css编译、压缩
            .pipe(rev()) //md5戳
            .pipe(gulp.dest(cssDestPath)) //发布
            .pipe(rev.manifest()) // 生成路径映射文件
            .pipe(gulp.dest(cssTmpPath)); //临时存储
    });

//JS更新引用文件版本号
gulp.task('UpdateJs', function(){
        return gulp.src([allTmpDevFiles, jsSrcPath+'*.*'])
            .pipe(revcollector()) //文件名替换
            .pipe(gulp.dest(jsTmpPath)); //临时存储
    });

//JS合并、压缩
gulp.task('zipJs', function(){
        return gulp.src(jsTmpPath+'main.js')
            .pipe(browserify())//合并
            .pipe(uglify()) //压缩
            .pipe(rename("main.min.js")) //重命名
            .pipe(rev()) //md5戳
            .pipe(gulp.dest(jsDestPath)) //发布
            .pipe(rev.manifest()) // 生成路径映射文件
            .pipe(gulp.dest(jsTmpPath)); //临时存储
    });

//HTML更新引用文件版本号
gulp.task('updateHtml', function(){
        return gulp.src([allTmpDevFiles, htmlSrcPath+'*.html']) //所有子路径下的路径映射文件
            .pipe(revcollector()) //文件名替换
            .pipe(gulp.dest(htmlTmpPath)); //临时存储
    });

//HTML压缩
gulp.task('zipHtml', function(){
        return gulp.src(htmlTmpPath+'*.html') //所有子路径下的路径映射文件
            .pipe(minifyHtml()) //压缩html
            .pipe(gulp.dest(htmlDestPath)); //临时存储
    });

//删除临时文件
gulp.task('delTempfile', function(){
        return del([allTmpDevPath]);
    });

//监控
gulp.task('watch', function(){
        gulp.watch(htmlSrcPath+'*.html', ['all']);
        gulp.watch(cssSrcPath+'*.*', ['all']);

        //自动刷新
        gulp.watch('build/*.html', function(file){
                livereload.changed(file.path);
            });
    });

gulp.task('all',function(done){
        sequence(

                'copyThirdJs',
                'zipImage',
                'UpdateCss',
                'zipCss',
                'UpdateJs',
                'zipJs',
                'updateHtml',
                'zipHtml',
                'delTempfile',
                done
            )
    });

//任务(顺序执行)
gulp.task("default", ['all', 'watch']);
