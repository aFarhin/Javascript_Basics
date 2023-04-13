const num = [1,2,3,4]
const num1 = num.map(function(curr,i,arr){
    return `${i} : ${curr}` + 0;
});
console.log(...num1);


const num2 =num.map((curr)=>{
    return curr+[,1,2];
})
console.log(...num2)
const num3 = num2.map((curr)=>{
    return curr+[,0]
})
console.log(...num3);



const students = [
    { id: 1, names:'Farhin', degree:'M.Sc' },
    { id: 2, names:'Marhin', degree:'B.Sc' },
    { id: 3, names:'Nasrin', degree:'B.Ed' },
];

const newStud = students.map((curr)=>{
    return `Name : ${curr.names} Degree: :${curr.degree}`
});
console.log(newStud)