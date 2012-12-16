basePath = '../';

files = [
  'test/lib/angular/angular-scenario.js',
  'test/lib/angular/angular-mocks.js',
  'test/e2e/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

singleRun = true;

proxies = {
  '/': 'http://localhost:3001/'
};


