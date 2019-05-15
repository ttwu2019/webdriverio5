exports.config = {

    'suites': {

    },

    'specs': ['src/test_scripts/TEST-01.js'],

    host: 'localhost',
    port: 9515,
    path:"/",
    capabilities: [{
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'trace',
    coloredLogs: true,
    screenshotPath: './errorShots',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 900000,
    },

    reporters: ['junit'],
    reporterOptions: {
        junit: {
            outputDir: './junit_output'
        }
    },

    before: function () {
        require('tcb-utils');
        var chai = require('chai');
        global.expect = chai.expect;
        global.username = process.env.USER_NAME;
        global.password = process.env.PASSWORD;
        global.baseUrl = process.env.BASE_URL;
    }
};
