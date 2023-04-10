/*Encapsulation in JavaScript allows us to hide the implementation details of an object from the outside world by restricting access to its internal state. 
It does this by using closures to create a private scope for the object's data and methods, so they cannot be accessed from outside the object.

 Imagine of building an e-commerce application that allows users to add products to their shopping cart.
I want to encapsulate the data and behavior of the shopping cart to prevent it from being modified directly by outside code.*/




function ShoppingCart() {
  // private state
  var items = [];

  // public methods
  return {
    addItem: function(item) {
      items.push(item);
    },
    removeItem: function(index) {
      items.splice(index, 1);
    },
    getItems: function() {
      return items;
    },
    getTotal: function() {
      return items.reduce((total, item) => total + item.price, 0);
    }
  };
}

// usage
var cart = ShoppingCart();
cart.addItem({ name: "Widget", price: 9.99 });
cart.addItem({ name: "Gadget", price: 19.99 });
console.log(cart.getItems()); // [{ name: "Widget", price: 9.99 }, { name: "Gadget", price: 19.99 }]
console.log(cart.getTotal()); // 29.98


/*In this example, we define a ShoppingCart function that creates an object with private state (items array) and 
public methods (addItem, removeItem, getItems, and getTotal) that operate on that state. 
We return an object literal that contains the public methods, which are closures that have access to the private state via the closure scope.

This encapsulates the implementation details of the shopping cart, preventing outside code from modifying its internal state directly. 
Instead, outside code can only interact with the shopping cart via its public methods, which provide a controlled interface for accessing and
modifying the shopping cart's data.


