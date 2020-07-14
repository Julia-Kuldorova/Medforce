let gulp = require("gulp"), //создать переменую Gulp
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync"),
  gulpAutoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cssmin = require("gulp-cssmin");  


gulp.task("sass", function(){ //дать задачу переменной 
  return gulp
    .src("app/scss/style.scss") //путь к файлу scss
    .pipe(sass({ outputStyle: "compressed" })) // Чтобы минифицирвоать код <труба между колбой и дестилятом>
    .pipe(rename({ suffix: ".min" })) //добавить суфикс
    .pipe(
      gulpAutoprefixer({
        overrideBrowserslist: ["last 8 version"]
      })
    ) // ДОПИСЫВАТЬ АВТО ПРЕФИКСЫ
    .pipe(gulp.dest("app/css")) //путь куда сохранять
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function() {
  return gulp
    .src([
        "node_modules/slick-carousel/slick/slick.js",
        "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
        'node_modules/gsap/dist/gsap.js',
        'node_modules/gsap/dist/ScrollTrigger.js',
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
});

gulp.task("style", function() {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css",
      "node_modules/slick-carousel/slick/slick.css",
      "node_modules/magnific-popup/dist/magnific-popup.css"
    ])
    .pipe(concat("libs.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("app/css"));
});

gulp.task("html", function(){
  return gulp.src("app/*.html")
        .pipe(browserSync.reload({ stream: true })); 
});

gulp.task("js", function() {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task("watch", function () {
    gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"))
    gulp.watch("app/*.html", gulp.parallel("html"))
    gulp.watch("app/js/*.js", gulp.parallel("js"));
});

gulp.task(
  "default",
  gulp.parallel("script", "style", "sass", "watch", "browser-sync")
); //чтобы все сразу запускались 