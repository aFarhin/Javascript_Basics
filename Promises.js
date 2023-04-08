
//  This line logs the string "Welcome!" and the current date and time to the console.
console.log("Welcome!", new Date());




// This creates a new promise myPromise using the Promise constructor. 
//It takes a function with two parameters, resolve and reject, which are callback functions 
//that will be called based on whether the promise is resolved or rejected. In this case,
// the function sets a timer for 2 seconds and then either resolves the promise with the string "Here is your data..." 
//or rejects it with the string "Sorry no data found".
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject("Sorry no data found");
    resolve("Here is your data...");
  }, 2000);
});




// This line logs the string "Promise", the myPromise object, and the current date and time to the console.
console.log("Promise", myPromise, new Date());




//This code uses the then() method to handle the resolution of the promise. 
//If the promise is resolved, the function passed to then() will be called with the resolved value, and it will log the string "DATA...."
//and the resolved value to the console. If the promise is rejected, the catch() method will handle it by calling the function passed to it with the rejected value,
//and it will log the string "CATCHING...." and the rejected value to the console.
  myPromise
  .then((data) => {
    console.log("DATA....", data);
  })
  .catch((err) => {
    console.log("CATCHING....", err);
  });




// This declares a function named hello() that returns the string "Hello" 
function hello() {
  return "Hello";
}




// OUTPUT:
// Welcome! 2023-04-08T16:06:42.071Z
// Promise Promise { <pending> } 2023-04-08T16:06:42.246Z
// DATA.... Here is your data...
