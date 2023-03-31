function logger (){
    console.log('My name is Fathin');
}

// calling/ invoking/ running code

logger();
logger();
logger();


// create a function to make apple and orange juice
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);

    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

 let appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice);

 let orangeJuice = fruitProcessor(0, 3);
 console.log(orangeJuice);



 //Calculate Age


 //  function declaration
 function calAge1(birthYear){
    return 2023 - birthYear;
 }
 const age1 = calAge1(1994)
 console.log(age1);


 //function expression
 const calAge2 = function(birthYear){
    return 2023 - birthYear;
 }
const age2 = calAge2(1994)
console.log(age2);


// Arrow Function
const calAge3 =birthYear => 2023 - birthYear
const age3 = calAge3(1994);
console.log(age3);

//how many years a person have until retirement

const retirementYear =( birthYear, name)=> {
    const age = 2023 - birthYear;
    const retirement = 60- age;
    return `${name} will retire in ${retirement} years`
}
console.log(retirementYear(1994, 'Farhin'));



//Call Back Function // Don't Repeat Yourself

// fruitprocessor will make juice only with smallaer fruit pieces; and then
// 1st step - cut fruits in multiple smaller pieces
// 2nd step = make juice with those pieces

function cutFruits (fruits){
    return fruits * 4;
}


function fruitProcessor (apples,oranges){
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges);

    const juice = `juice is made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}
console.log(fruitProcessor(2, 3))



//Coding Challenge on function :


// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/


const calcAverage =(score1, score2, score3)=>(score1+score2+score3)/3;
console.log(calcAverage(3, 4, 5));

//TEST 1 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolhins, avgKoalas){
    if(avgDolhins>= 2* avgKoalas){
        console.log(`Dolphins win ${avgDolhins} vs ${avgKoalas}`)
    } else if ( avgKoalas>= 2*avgDolhins){
        console.log(`Kolas win ${avgDolhins} vs ${avgKoalas}`)
    } else {
        console.log(`No team wins.`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
 



