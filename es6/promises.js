// let complete = true;
// let complete = false;

// let prom = new Promise(function(resolve, reject){
//     if(complete){
//         resolve(" I am Successfull");
//     }else{
//         reject("I am failed");
//     }
// });

function prom(complete){
    return new Promise(function(resolve, reject){
        console.log("Fetching data, Please wait")
        setTimeout(() => {
            if(complete){
                resolve(" I am Successfull");
            }else{
                reject("I am failed");
            }
        }, 1000)
    });

}

// let onfullfilment = (result) => {
//     console.log(result);
// }

// let onrejection= (error) => {
//     console.log(error);
// }

prom(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// console.log(prom(true));
// console.log(prom(false));

// division exp

function prom(a, b){
    return new Promise(function(resolve, reject){
        console.log("Fetching data, Please wait")
        var c = a / b;
        setTimeout(() => {
            if(a, b){
                resolve(`Your answer: ${c}`);
            }else{
                reject("failed to calculate");
            }
        }, 1000)
    });

}

prom(5, 2).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});