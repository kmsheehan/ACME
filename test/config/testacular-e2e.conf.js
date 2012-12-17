basePath = '../';

files = [
  'lib/angular/angular-scenario.js',
  'lib/angular/angular-mocks.js',
  'e2e/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

singleRun = true;

proxies = {
  '/': 'http://localhost:3001/'
};


