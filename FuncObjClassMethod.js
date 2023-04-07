
///// HOW FUNCTION, OBJECT , METHOD & CLASS WORKS ?




//////// FUNCTION //////
// Function to add two numbers and return the result
function addNumbers(a, b) {
  return a + b;
}

// Invoking the function with arguments and storing the result
let result = addNumbers(2, 3);

console.log(result); // Output: 5






////////// OBJECT ///////
// Creating an object using object literal notation
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("The car has started.");
  }
};

// Accessing the object properties and invoking the method
console.log(car.make); // Output: Toyota
console.log(car.year); // Output: 2020
car.start(); // Output: The car has started.







/////////// CLASS //////
// Defining a class using class notation
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(`${this.name} the ${this.type} says hello!`);
  }
}

// Creating instances of the class
let cat = new Animal("Mittens", "cat");
let dog = new Animal("Rover", "dog");

// Invoking the methods of the instances
cat.speak(); // Output: Mittens the cat says hello!
dog.speak(); // Output: Rover the dog says hello!







///////// METHOD ////////
// Defining a class with methods
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

// Creating an instance of the class and invoking the methods
let myCounter = new Counter();

myCounter.increment(); // Incrementing the count
console.log(myCounter.count); // Output: 1

myCounter.decrement(); // Decrementing the count
console.log(myCounter.count); // Output: 0



