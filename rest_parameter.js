function sum (...input){
    console.log(...input);
    let sum =0;
    for(let i of input){
        sum+= i;
    }
    console.log(sum);
}
sum(1,2,3,4 ,5,6,7,8,9,11,21,23)


function players(a,b,...c){
    console.log(`${a} ${b}`)
    console.log(...c)
    console.log(c[0])
    console.log(c.length)
    console.log(c.indexOf('Mbappe'))
}
players('Ronaldo', 'Benzema', 'Ramos', 'Marcelo', 'Mbappe')