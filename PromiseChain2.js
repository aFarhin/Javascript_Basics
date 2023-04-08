console.log("Woke Up!");

function doBrush(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("Done brushing")
            // reject("Not brushing")
        }, 2000);
    });
};

function doBreakfast(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("Done breakfast")
            // reject("Not done with breakfast")
        }, 2000)
    });
};

function startStudy(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("Start studying")
            // reject("Not started studying")
        }, 2000)
    });
};

console.log("Mom is cooking");



doBrush()
.then((data1)=>{
    console.log(data1, new Date());
    return doBreakfast();
})
.catch((err)=>{
    console.log("error1:", err)
    throw err;
})
.then((data2)=>{
    console.log(data2, new Date());
    return startStudy();
})
.catch((err)=>{
    console.log("error2:", err)
    throw err;
})
.then((data3)=>{
    console.log(data3, new Date());
})
.catch((err)=>{
    console.log("error3:", err)
})




