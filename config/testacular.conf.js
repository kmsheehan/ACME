// Testacular configuration
// Generated on Mon Dec 10 2012 09:45:48 GMT+0530 (India Standard Time)


// base path, that will be used to resolve files and exclude
// basePath = '..\..\..\..\..\..\..\..\..\..';

basePath = '..';

// list of files / patterns to load in the browser


files = [
JASMINE,
JASMINE_ADAPTER,
'app/js/lib/angular/angular.js',
'app/js/lib/angular/angular-*.js',
'test/lib/angular/angular-mocks.js',
'app/js/indexCtrl.js',
'test/unit/controllersSpec.js'
];

console.log(JASMINE);

// list of files to exclude
exclude = [
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9090;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [];


// If browser does not capture in given timeout [ms], kill it
captureTimeout =1005000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
