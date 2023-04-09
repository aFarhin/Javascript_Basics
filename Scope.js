// Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.
//However, a function can access all variables and functions defined inside the scope in which it is defined.
//In other words, a function defined in the global scope can access all variables defined in the global scope. 
//A function defined inside another function can also access all variables defined in its parent function, 
//and any other variables to which the parent function has access.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Farhin";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // op- 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // op- "Farhin scored 5"


// It can be converted into a recursive function declaration, followed by a call to that function:
function loop(x) {
    if (x >= 10) {
      return [];
    }
    const result = [x];
    const recursiveResult = loop(x + 1);
    for (let i = 0; i < recursiveResult.length; i++) {
      result.push(recursiveResult[i]);
    }
    return result;
  }
  
  const a = loop(0);
  console.log(a); // output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
