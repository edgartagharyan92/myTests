
exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: "jasmine",
    specs: ['testCases/*.js'],
    suites: {},                // We Can Combine Test Scenarios in Suites
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
    },

    onPrepare: function () {

        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
}

