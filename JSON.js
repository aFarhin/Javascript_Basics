let me ={
    names : "Farhin",
    age :28,
    course:"Acciojob"
}

let json1 = JSON.stringify(me);
console.log(json1);

let x = JSON.parse(json1);
console.log(x);

// JSON stands for JavaScript Object Notation and is a lightweight 
// data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.


// how JSON works?

// 1. Create a JavaScript object or array to represent the data you want to send or receive.

const person = {
    name: 'Farhin',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Arambagh',
      state: 'WestBengal',
      zip: '12345'
    }
  };
  

// 2. Use the JSON.stringify() method to convert the JavaScript object or array to a JSON-formatted string 
// that can be sent to the server or stored in a file.

const jsonPerson = JSON.stringify(person);


// 3. When receiving JSON data from the server or from a file, use the JSON.parse() method to convert
//  the JSON string to a JavaScript object or array.

// Example using fetch API


fetch('/api/person')
  .then(response => response.json())
  .then(data => {
    console.log(data.name);
    console.log(data.address.city);
  })
  .catch(error => {
    console.error(error);
  });







  // exceptions:

// /////// function will not be shown.
//  as it only stringify the data type of number, array, object, string, boolean. not function 
  const farhins ={
    name:" Far",
    age : 28,
    title: function(){
      console.log("I am Farhin")
    }
  }
   let jsons =JSON.stringify(farhins);
   console.log(jsons);





  /////////but if we want to show the function in stringify, here it is:////

  const farhin = {
    name: "Far",
    age: 28,
    title: function() {
      console.log("I am Farhin");
    },
    toJSON: function() {
      // create a new object without the function
      const obj = Object.assign({}, this);
      delete obj.title;
      // add a string representation of the function
      obj.titleString = this.title.toString();
      return obj;
    }
  };
  
  const json = JSON.stringify(farhin);
  console.log(json);
  
