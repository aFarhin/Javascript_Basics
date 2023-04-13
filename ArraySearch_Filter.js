
/////// Search Method //////
let arr = ['Farhin', 'Nasrin', 'Mahrin', 'Neha', 'Farhin', 'Mahrin']

console.log(arr.indexOf('Farhin'));
console.log(arr.lastIndexOf('Farhin'));
console.log(arr.lastIndexOf('Nasrin', 3));


console.log(arr.includes('Farhin'));
console.log(arr.includes('Nasrin', 3));




const prices = [500, 200, 400, 300, 100]

////////  Find method //////////
const findPrice = prices.find((curr) => curr < 400);
console.log(findPrice) //but only find frst one element


//////// Filter Method ////////
const findPrice1 = prices.filter((curr) => curr < 400);
console.log(findPrice1) // gives all the elements


////// Array.sort() /////
console.log(findPrice1.sort());


