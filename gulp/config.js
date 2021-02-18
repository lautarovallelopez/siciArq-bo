const loadConfig = environment => cb => {
    if (environment) {
        require('dotenv').config({path: `.env-${environment}`});
    } else {
        require('dotenv').config({path: '.env-uat-dev'});
    }
    cb();
};

const loadProdConfig = loadConfig('prod');
loadProdConfig.displayName = 'load PROD config';

const loadUatConfig = loadConfig('uat');
loadUatConfig.displayName = 'load UAT config';

const loadDevConfig = loadConfig('dev');
loadDevConfig.displayName = 'load dev config';

exports.loadProdConfig = loadProdConfig;
exports.loadUatConfig = loadUatConfig;
exports.loadDevConfig = loadDevConfig;

