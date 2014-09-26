extend = require("node.extend");

var environment = process.env.NODE_ENV || "dev";

var genericConfig = {
    specs: ['../test/spec.js']
};

var genericCapability = {
    'name': process.env.CI_MESSAGE || 'Ad hoc message',
    'build': process.env.CI_BUILD_NUMBER + ' (' + (process.env.CI_COMMIT_ID || "No comments.").substring(0, 7) + ')',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
};

var configurationsByEnvironment = {
    test : extend({
        sauceUser: 'dpamio',
        sauceKey: 'd978b728-fafd-4b9a-a622-3c0342bc27f5',

        multiCapabilities: [
            extend({
                'browserName': 'chrome'
            }, genericCapability), extend({
                'browserName': 'firefox'
            }, genericCapability), extend({
                'browserName' : 'internet explorer',
                'platform' : 'Windows 8.1',
                'version' : 11
            }, genericCapability)],
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig),
    dev : extend({
        seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
        capabilities: {
            'browserName': 'firefox',
            'name': "Development Build",
            'build': "N/A"
        },
        verbose: true,
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig)
};

exports.config = configurationsByEnvironment[environment];
