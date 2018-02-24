/* 
* @Author: lenovo
* @Date:   2018-02-24 16:53:58
* @Last Modified by:   lenovo
* @Last Modified time: 2018-02-24 19:29:42
* */
    var gulp=require("gulp");
    //console.log(gulp)
    var x=require("gulp-minify-css");
    var y=require("gulp-minify-html");
   console.log(x);
   gulp.task("css",function(){
   	gulp.src("css/zidingyi.css").pipe(x()).pipe(gulp.dest("./ggg"))
   });
   gulp.task("html",function(){
   	gulp.src("./index.html").pipe(y()).pipe(gulp.dest("./xiang"))
   })
   gulp.task("default",["css","html"]);
   //实时监听
   gulp.watch('./*html',["html"]);
  gulp.watch('*css',["css"]);