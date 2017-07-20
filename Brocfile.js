let Rollup = require('broccoli-rollup');
let rollupNodeResolve = require('rollup-plugin-node-resolve');
let rollupCommonjs = require('rollup-plugin-commonjs');
let uglifyJavaScript = require('broccoli-uglify-sourcemap');
var babel = require('broccoli-babel-transpiler');

let tree = 'src';

tree = new Rollup(tree, {
  rollup: {
    plugins: [
      rollupNodeResolve({ jsnext: true, main: true }),
      rollupCommonjs()
    ],
    entry: 'index.js',
    dest: 'index.js',
    format: 'iife',
    moduleName: 'fingerprint'
  }
});

tree = babel(tree);

tree = new uglifyJavaScript(tree);

module.exports = tree;
