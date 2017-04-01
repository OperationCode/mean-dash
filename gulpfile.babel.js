import gulp from 'gulp'
import path from 'path'
import webpack from 'webpack-stream'
const browserSync = require('browser-sync')

const reload = () => browserSync.reload()
const root = './public'

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || ''
  return path.join(root, 'app', glob) // app/{glob}
}

// map of all paths
const paths = {
  js: resolveToApp('**/*!(.spec.js).js'), // exclude spec files
  css: resolveToApp('**/*.css'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join('app/index.js'),  // not sure if the entry should start at the /public path ?
  output: root
}

gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output))
})

gulp.task('reload', ['webpack'], (done) => {
  reload()
  done()
})

gulp.task('serve', ['webpack'], () => {
  browserSync({
    port: process.env.PORT || 5000,
    server: { baseDir: root },
    domain: '0.0.0.0',
    open: true
  })
})

gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat([paths.js], paths.html, [paths.css])
  gulp.watch(allPaths, ['reload'])
})

gulp.task('default', ['watch'])
