function createUser(nameVal, emailVal, phoneVal, historyVal, genderVal) {
  return {
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    history: historyVal,
    gender: genderVal,
  };
}
// This defines a factory function createUser() that takes in five arguments: nameVal, emailVal, phoneVal, historyVal, and genderVal.
// This function returns an object with properties that correspond to each of the arguments passed to the function.



var user2 = createUser(
  "Farhin",
  "farhin@gmail.com",
  "9899999999",
  "historyv",
  "female"
);

// In this lines, the createUser() function is called with specific values for each argument, and the resulting object is assigned to the variable user2.



console.log("User2>>>", user2);
// The output of this console.log call will display the properties and values of the user2 object:
User2>>> {
  name:  "Farhin",
  email: "farhin@gmail.com",
  phone: "9899999999",
  history: "historyv",
  gender: 'female' 
}


// Overall, this code creates a reusable createUser() function that can generate objects with user information based on specified values for each property.
// This factory function can be useful for creating multiple user objects with similar properties, without having to repeat the same code for each one.





