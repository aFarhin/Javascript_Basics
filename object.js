//OBJECTS:
const farhinArray = [
    'Farhin',
    'Acciojob',
    'FrontEnd',
    ['Neha', 'Ana', 'Maru']
]

//so, here is an array of Farhin's details. where some details of Farhin are given like - name, course name, part of course, friends of Farhin.
// but we can't separately name those detail properties. So, to solve this problem Object is created. where we can write properties and their values together.

//key = variable name (properties) 
// value = any type 
// { key : 'value'}

// so let's express this way-

const farhinObj = {
    name: 'Farhin',
    course: 'Acciojob',
    batch: 'FrontEnd',
    friends: ['Neha', 'Ana', 'Maru']
};

// we can access ordered data through Array.
// but we can access any unordered/ unstructured data through object.
// that's why Object is very important.


//////// DOT VS BRACKET NOTATION ///////////

//Dot notation ://
console.log(farhinObj.name);

// value of name property will be showing through the farhinObj object. this dot(.) is an operator which takes the property of the object as "name" 
// and then access the value of this property. output- Farhin


// Bracket Notation ://
const interestedIn = prompt('What do you want to know about farhin ? choose among name, course, batch, friends');
console.log(farhinObj[interestedIn]);

// so here if somebody writes course in prompt section, that property will be passed to interestedIn variable. 
// but if we want to show the value of this property as--- console.log(farhinObj.interestedIn)--- it will show error as "Undefined". 
// as interestedIn variable is not declared in the farhinObj object.
//so to avoid this problem we have to use bracket notation. so that it can take any properties as string through the given variable interesIn. 

if (farhinObj[interestedIn]) {
    console.log(farhinObj[interestedIn])
} else {
    console.log(`Wromg Input.p;ease choose among name, course, batch, friends`);
}


//another way to get value of objects:

farhinObj['location'] = 'Arambagh';
farhinObj.country = 'India';
console.log(farhinObj);

//output :
// {name: 'Farhin', course: 'Acciojob', batch: 'FrontEnd', friends: Array(3), location: 'Arambagh', …}
// batch
// : 
// "FrontEnd"
// country
// : 
// "India"
// course
// : 
// "Acciojob"
// friends
// : 
// (3) ['Neha', 'Ana', 'Maru']
// location
// : 
// "Arambagh"
// name
// : 
// "Farhin"


// now challenege :

// console log this -
//" Farhin has 3 friends, and her best friend is Neha. Farhin currently is doing a course in Acciojob. She is in frontend batch. She is from arambagh"

console.log(`${farhinObj.name} has ${farhinObj.friends.length} friends, and her best friend is ${farhinObj.friends[0]}.
Farhin currently is doing a course in ${farhinObj.course}. She is in ${farhinObj.batch} batch. She is from ${farhinObj.location}`)
