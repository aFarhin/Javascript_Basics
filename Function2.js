

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function-
function myFunc(obj){
    obj.name = obj.name+'a';
    obj.age =obj.age+1;
    
}

const myObj ={
    name : "Farhin",
    age: 28,
    gender: "Female",
}

console.log(myObj.name, myObj.age) // Output -Farhin 28

myFunc(myObj);

console.log(myObj.name, myObj.age); // Output- Farhina 29




// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function
function myArr(obj1){
    obj1[0]=23;
    obj1[2]= 70;
}
const arr = [10, 20, 30, 40, 50];

console.log(arr[0], arr[2]);  // Op- 10, 30
myArr(arr);
console.log(arr[0], arr[2]); // op- 23, 70




//  a map function that receives a function as first argument and an array as second argument:
// Function expressions are convenient when passing a function as an argument to another function
// In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument:
function map(a, f){
    const result = [];
    for(let i=0; i<a.length; i++){
        result[i] = f(a[i]);
    }
    return result;
};

const f= function(x){
    return x*x*x;
};

const num = [2, 3, 4, 5,6];
const result = map(num, f);
console.log(result);





// A function can be defined based on a condition. For example, the following function definition defines fun in two different conditions:
let p =1;

if(p==2){
     function fun(obj){
        obj.age= obj.age+1;
    } 
}else{
    function fun(obj){
        obj.age = obj.age-1;
    }
}
 let myage ={
    age: 28,
 };
 console.log(myage.age);
 fun(myage);
 console.log(myage.age);

