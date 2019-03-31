import { doSomething } from "./lib";

/*
 * Inline
 */
doSomething("inline something", function(err, data) {
  console.log(data);
});

/*
 * Seperate function
 */
function myCallbackFunction(err, data) {
  console.log(data);
}
doSomething("seperate function", myCallbackFunction);

/*
 * Many parameters
 */
doSomething("many parameters", function(err, reqeust, response, body, json) {
  console.log(data);
});

/*
 * Arrow function
 */
doSomething("arrow function", (err, data) => {
  console.log(data);
});
