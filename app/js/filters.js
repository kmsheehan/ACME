'use strict';

/* Filters */

angular.module('myApp.filters', []).
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]).filter('startFrom', function() {
    return function(input, idx) {
        var i=idx, len=input.length, result = [];
        for (i; i<len; i++)  {
            result.push(input[i]);
        }
        return result;
    };
});
