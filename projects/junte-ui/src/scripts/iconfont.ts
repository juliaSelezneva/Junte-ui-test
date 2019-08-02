import * as gulp from 'gulp';
import * as consolidate from 'gulp-consolidate';
import * as debug from 'gulp-debug';
import * as iconfont from 'gulp-iconfont/src';
import * as rename from 'gulp-rename';
import { Gulpclass, SequenceTask, Task } from 'gulpclass';
import 'reflect-metadata';

const argument = require('minimist')(process.argv.slice(2));
const iconFiles = '/images/icons/*.svg';
const stylesFiles = '/styles/';
const fontsFiles = '/fonts/icons/';
const iconTemplate = '/styles/_icons-template.scss';

@Gulpclass()
export class Gulpfile {

  @Task()
  styles() {
    const path = argument.path;
    return gulp.src([path + iconFiles])
      .pipe(debug())
      .pipe(iconfont({
        fontName: 'icons',
        prependUnicode: false,
        formats: ['ttf', 'woff', 'svg', 'eot', 'woff2'],
        timestamp: Math.round(Date.now() / 1000),
        normalize: true,
        fontHeight: 1001,
        appendCodepoints: true
      }))
      .on('glyphs', function (glyphs) {
        glyphs.forEach(function (glyph, idx, arr) {
          arr[idx].unicode[0] = glyph.unicode[0].charCodeAt(0).toString(16);
          glyph.name = glyph.name.substring(0, glyph.name.lastIndexOf('-'));
        });
        gulp.src(path + iconTemplate)
          .pipe(consolidate('lodash', {
            glyphs: glyphs,
            fontName: 'icons',
            fontPath: '../fonts/icons/',
            className: 'icon'
          }))
          .pipe(rename('icons.scss'))
          .pipe(gulp.dest(path + stylesFiles));
      })
      .pipe(gulp.dest(path + fontsFiles));
  }

  @SequenceTask()
  build() {
    return ['styles'];
  }
}
