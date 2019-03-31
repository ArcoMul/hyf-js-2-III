// Callback
// A callback is a function that is to be executed after another function has
// finished executing — hence the name ‘call back’.

// A design pattern

// Example
requestGoogleCom("bikes", function(error, listOfResults) {
    console.log(error, listOfResults)
});

// Recognizable by the function parameters: error, data
doSomething(..., function (err, data) {

});

// Request on npm: https://www.npmjs.com/package/request
// Twitter npm package: https://www.npmjs.com/package/twitter