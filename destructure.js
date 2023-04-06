const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  order: function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/////////Destructuring Object:
const {name, openingHours, categories}= restaurant; // no variable to store values
const{
  name: N,
  openingHours: O,
  categories: C,
}= restaurant;  // store values in variables // helps when we work on web API data

console.log(name, openingHours, categories)
console.log(N,O,C);




////////  Destructuring Array:
const arr = [2,3,4];
const a = arr[0]
const b= arr[1]
const c = arr[2]

const [x,y,z] = arr  // Array is not destroyed. it is destructured
console.log(x,y,z);
console.log(arr);

//when don't want to extract all elements from array
// simply follow the order of elements
const [one, two, three]= restaurant.mainMenu;
console.log(one, two, three);

//to get elements not in ordered way, but ifrom particular index
const [first, , second]= restaurant.mainMenu;
console.log(first, second);

// when we want to replace each othe's places in array
let [main1, main2]= restaurant.categories;
console.log(main1, main2);

let temp = main1; // just swap the elements
main1= main2;
main2= temp;
console.log(main1, main2);

[main1, main2]=[main2, main1] // Destructre, instead of swap
console.log(main2, main1); // no need of temp variable

// order without destructuring:
 console.log(restaurant.order(2,1))
 // now destructure: // rcv 2 return values from function
 const[frst, scnd]= restaurant.order(2,1);
 console.log(frst, scnd);


 // Nested Array : without Destructuring
 const nested= [2,4,[5,6]];
 const[i,j,k] = nested;
 console.log(i,j,k);

 // Nested array : Destructuring
 const [m, n,[o,p]]=nested;
 console.log(m,n,o,p)

//  When we dont know the Length of Array:
const [s=1, q=1, r='nothing']=[2,3]
console.log(s,q,r)

