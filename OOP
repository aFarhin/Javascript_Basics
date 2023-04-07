 // Encapsulation://
 
 class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }
}

let myAccount = new BankAccount(1234567890, 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.balance); // Output: 1300

//In this example, BankAccount is a class that encapsulates the data and methods related to a bank account. 
//The accountNumber and balance properties are encapsulated within the class, and can only be accessed and modified using the deposit and withdraw methods.
//This helps to ensure that the balance is always updated correctly, and that no unintended changes are made to the account data.



//Inheritance://

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let myDog = new Dog("Rover");
myDog.speak(); // Output: Rover barks.

//In this example, Animal is a base class that defines the name and speak methods. 
//The Dog class inherits from Animal using the extends keyword, and overrides the speak method to provide its own implementation. 
//This allows you to create a hierarchy of classes with different behavior and attributes, while still sharing common functionality.



//Polymorphism::

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} meows.`);
  }
}

let myAnimals = [new Dog("Rover"), new Cat("Fluffy")];
myAnimals.forEach(animal => animal.speak());
// Output: Rover barks. Fluffy meows.


//In this example, Animal is a base class that defines the name and speak methods.
// The Dog and Cat classes inherit from Animal and override the speak method to provide their own implementation.
//The myAnimals array contains instances of both Dog and Cat, which are treated as Animal objects in the forEach loop.
// This demonstrates polymorphism, where objects of different types can be treated as if they were of the same type.



//Abstraction::

class Shape {
  getArea() {
    throw new Error("Method not implemented.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let myRectangle = new Rectangle(10, 5);
console.log(myRectangle.getArea()); // Output: 50

//In this example, Shape is an abstract


