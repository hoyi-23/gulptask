//gulpfile.js
//解構賦值(Gulp的不同function)
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
//browsersync需要create()，有點像是初始
const browsersync = require('browser-sync').create();

//html 複製到dist
function htmlTask(){
    return src('app/pages/*.html')
    .pipe(dest('dist/pages',{sourcemaps: '.'}))
}

//Sass Task
function scssTask(){
    return src('app/asset/style/all.scss',{sourcemaps: true})
    .pipe(sass()) //scss function 處理任務
    .pipe(postcss([cssnano()])) // postcss function 處理任務
    .pipe(dest('dist/style',{sourcemaps: '.'})) // 存在新的dist資料夾
}

//JavaScript Task
function jsTask(){
    return src('app/asset/js/all.js')
    .pipe(terser()) //壓縮JS檔
    .pipe(dest('dist/js',{sourcemaps: '.'}))
}

//Browsersync Tasks(會有兩個)
//first: initialize local server and start running it
function browersyncServe(callback){
    browsersync.init({
        server: { 
            baseDir: 'dist/pages' //指向要開啟的資料夾
        }
    });
    callback();
   };
   //second: reload the server whenever the code is changed
   function browsersyncReload(callback){
    browsersync.reload();
    callback();
    };

// callback function: 在 Gulp 中，所有任務都是非同步的 JS function，
//所以如果 function 不需要 return 東西，我們需要使用 callback function 來明確的表示它已經執行完畢。
//其實就是 done 回調函數的用法。

//watch Task
function watchTask(){
    watch(['app/pages/**/*.html',
            'app/asset/style/**/*.scss',
            'app/asset/js/**/*.js'],
            series(htmlTask,scssTask,jsTask,browsersyncReload));
            
}


exports.default = series(
    htmlTask,
    scssTask,
    jsTask,
    browersyncServe,
    watchTask
)