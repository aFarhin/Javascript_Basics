let names = ['Farhin', 'Neha', 'Nasrin', 'Salu', 'Maru'];

console.log(`Names are: ${names} `)
console.log(`Names length: ${names.length}`)

let [, , , , five]= names;
console.log(`last name is : ${five}`)



//////////program to swap two numbers without using third variable

let a = 5;
let b = 10;
[a,b] =[b,a]

console.log(`a: ${a} and b: ${b}`)