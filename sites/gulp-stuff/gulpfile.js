const {src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');

//moves HTML to build/
function bundleHTML(){
    return src("./src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build/"))
}

// Task the name build

// Exports.default is the task name.
// Execute the task using the gulp command.
// Gulp
// npm run gulp

exports.build = bundleHTML