/////////////// OBJECT METHOD ////////

// when a function is atttached to an object , it is called method.
// we use function expresssion as the method of a function.
// we don't use function declaration as method of function. it gives syntax error.

const farhin = {
    name: 'Farhin',
    course: 'Acciojob',
    batch: 'FrontEnd', // string value
    friends: ['Neha', 'Ana', 'Maru'], //Array value
    hasJob: false, // boolean value

    calAge: function (birthYear) {  // method : a property which holds a function value.
        return 2023 - birthYear;
    }
};
console.log(farhin.calAge(1994));
console.log(farhin['calAge'](1994));

//now suppose I  know Farhan's birthyear 1994, and I want to access it in different function, for this what I have to do?

// then we have to use the spacial variable  "this". this 
// "this" keyword/variable is basically the object on which the method is being called. or it is equal to the object which is calling method

const farhan = {
    name: 'Farhan',
    course: 'Acciojob',
    batch: 'FrontEnd', // string value
    friends: ['Neha', 'Ana', 'Maru'], //Array value
    hasJob: false, // boolean value
    birthYear: 1994,

    calAge: function () {  // method : a property which holds a function value.
       console.log(this);
        return 2023 - this.birthYear;
    },

    bestFriend: function(){
        console.log(this);
        return this.friends[0];
    }
};

console.log(farhan.calAge()); 
console.log(farhan.bestFriend());
// here "calAge " and "bestFriend" are the methods which are being called by the object "farhan".
//so inside this method "this" variable will point to "farhan" object

//// necessity of this keyword////
// if we need to change the object name, then we have to change all the method's object name. and if we by mistake forget to change then it will give syntax error. 
/but using "this" keyword will not let us face this problem. 


/////now suppose we need to call a "courseOn" method 5 times repeatedly to get value of course 5 times. so to stop DRY what we need to do?

//we just need to create a 'course' property in the object with this variable. and call this property as many time as you want after calling the method only one time.
//let's see-

const farhana= {
    course :'Acciojob',

    courseOn : function(){
        return this.course;
    }
};
console.log(farhana.courseOn());
console.log(farhana.course);
console.log(farhana.course);
console.log(farhana.course);
console.log(farhana.course);


/////challenge////

//write this line - "Neha is a Teacher. She loves dancing. she has a sister named Sneha. Neha lives in Kolkata"

const neha = {
    job : 'Teacher',
    hobby : 'dancing',
    sister : 'Sneha',
    location :'Kolkata',

    summary: function(){
        return `Neha is a ${this.job}. She loves ${this.hobby}. she has a sister named ${this.sister}. Neha lives in ${this.location}`
    }
}

console.log(neha.summary());


///////////////////////////////////////
// Coding Challenge on Object

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
//Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, 
and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/


const mark ={
    name : 'Mark Miller',
    weight: 78,
    height: 1.69,

   calBMI: function(){
        this.bmi =Math.floor( this.weight / this.height**2);
        return this.bmi;

    }
};

const john ={
    name : 'John Smith',
    weight: 92,
    height: 1.95,

    calBMI: function(){
        this.bmi =Math.floor(this.weight / this.height**2);
        return this.bmi;

    }
};
mark.calBMI();
john.calBMI();
console.log(mark.bmi, john.bmi)

if(mark.bmi> john.bmi){
    console.log(`${mark.name} has higher BMI than ${john.name}` )
} else {
    console.log(`${john.name} has higher BMI than ${mark.name}` )
}
