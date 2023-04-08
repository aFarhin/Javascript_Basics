// function waitFnc() { ... } 
//Defines a function named waitFnc which returns a Promise that resolves after a delay of 2000 milliseconds, or rejects immediately with the message "No Seats Left".
function waitFnc() {
  console.log("Enterred Shop", new Date());
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //   resolve("Waiting in line....");
      reject("No Seats Left");
    }, 2000);
  });
};


// function getHaircut() { ... } - Defines a function named getHaircut which returns a Promise that resolves after a delay of 3000 milliseconds
//with the message "Haircut Done", or rejects immediately with the message "Barber has to go for lunch ".
function getHaircut() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Haircut Done");
      //   reject("Barber has to go for lunch ");
    }, 3000);
  });
};


// function pay() { ... } - Defines a function named pay which logs the message "PAYMENT DONE!" to the console.
function pay() {
  console.log("PAYMENT DONE!");
};


// function backgroundMusic() { ... } - Defines a function named backgroundMusic which logs the message "Playing Music" to the console.
//backgroundMusic(); - Calls the backgroundMusic function, which logs "Playing Music" to the console.
function backgroundMusic() {
  console.log("Playing Music");
};
backgroundMusic();



// waitFnc() ... - Calls the waitFnc function, which returns a Promise. The .then and .catch methods are chained to the Promise.

// .then((data1) => { ... } - The first .then method in the chain. 
//It takes a callback function that receives the resolved value of the previous Promise (waitFnc in this case), which is either "Waiting in line...."
//or "No Seats Left". If the value is "Waiting in line....", it logs that message to the console and returns the result of calling the getHaircut function,
//which returns another Promise. If the value is "No Seats Left", it jumps to the .catch method in the chain.

// .then((data2) => { ... } - The second .then method in the chain. 
// It takes a callback function that receives the resolved value of the previous Promise (getHaircut in this case),
// which is either "Haircut Done" or "Barber has to go for lunch".
// If the value is "Haircut Done", it logs that message to the console and returns the result of calling the pay function, which does not return anything.
// If the value is "Barber has to go for lunch", it jumps to the .catch method in the chain.
// .catch((err) => { ... } - The .catch method in the chain. It takes a callback function that receives the rejected value of any of the previous Promises, 
// which is either "No Seats Left" or "Barber has to go for lunch". It logs the message "ERROR" and
// the rejected value to the console, and then logs "Sorry, Come again later" to the console.
waitFnc()
  .then((data1) => {
    console.log(data1, new Date());
    return getHaircut();
  }) 
  .then((data2) => {
    console.log(data2, new Date());
    return pay();
  })
  .catch((err) => {
    console.log("ERROR", err);
    console.log("Sorry, Come again later");
  });



// OUTPUT:
// Promise Chaining
// Playing Music
// Enterred Shop 2023-04-08T16:13:53.610Z
// ERROR No Seats Left
// Sorry, Come again later

