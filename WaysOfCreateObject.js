          ///////////////In JavaScript, there are several ways to create an object. Below are some examples of different approaches:///////////////




                               ////////  1. Object Literal://////////
// An object literal is the simplest and most common way to create an object in JavaScript. 
// It is defined using curly braces {} and contains one or more key-value pairs separated by a colon.
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

                           //////////// 2.Object Constructor://////////
//Objects can be created using an object constructor function which is created using the Object() constructor.
let person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";


                         ///////////// 3. Factory Function:///////////
//A factory function is a function that returns an object. It can be used to create multiple objects with similar properties.
function createPerson(name, age, city) {
  return {
    name: name,
    age: age,
    city: city
  };
}
let person1 = createPerson("John", 30, "New York");
let person2 = createPerson("Jane", 25, "Los Angeles");




                       //////////// 4. Object.create() method: /////////////
// The Object.create() method creates a new object with the specified prototype object and properties.
let personPrototype = {
  age: 30,
  city: "New York"
};
let person = Object.create(personPrototype);
person.name = "John";






                  //////////// 5. ES6 Classes: /////////////////
// ES6 introduced the class syntax to create objects in JavaScript. It provides a syntax for defining a constructor
//function and adding methods to the object using the class keyword.
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
let person1 = new Person("John", 30, "New York");
let person2 = new Person("Jane", 25, "Los Angeles");



