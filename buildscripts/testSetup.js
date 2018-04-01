// this file is not transpiled, explicity commonJs and ES5 required. 

//register babel to transpile before out tests run. 
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){};
