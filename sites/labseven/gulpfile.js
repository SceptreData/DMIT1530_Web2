let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync").create();

const srcPath = "src/";
gulp.task("sass", function() {
  return gulp
    .src(srcPath + "scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest(srcPath + "css"))
    .pipe(browserSync.stream());
});

gulp.task(
  "serve",
  gulp.series("sass", () => {
    browserSync.init({
      server: "./src"
    });

    gulp.watch(srcPath + "scss/**/*.scss", gulp.series("sass"));
    gulp.watch(srcPath + "*.html").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
