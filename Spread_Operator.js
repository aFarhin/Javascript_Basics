function sum(a, b, c, d) {
    console.log(a + b + c + d)
}

var arrVal = [5, 6, 7, 10]
sum(...arrVal);


/////concat///
let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]

a = [...a, ...b, ...c]
console.log(a);


/////copy value to another array and add more value///

let x = [1, 2, 3]

let y = [...x, 4, 5, 6]
console.log(y)
