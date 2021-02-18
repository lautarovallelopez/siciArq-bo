const {parallel, series} = require('gulp');

const {loadProdConfig, loadUatConfig, loadDevConfig} = require('./gulp/config');
const {clean, dist, lint} = require('./gulp/dist');

exports.lint = lint;

exports.build = series(
    parallel(clean, loadProdConfig),
    dist
);

exports['build:uat'] = series(
    parallel(clean, loadUatConfig),
    dist
);

exports['build:dev'] = series(
    parallel(clean, loadDevConfig),
    dist
);
