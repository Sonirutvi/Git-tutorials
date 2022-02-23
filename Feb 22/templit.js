//es5
console.log("my name is rutvi. my age is 20");

//es6
console.log(`my name is rutvi. my age is 20`);

//es5
let firstname = "rutvi";
let lastname = "soni";
console.log("my name is " + firstname + ". My last name is " + lastname +".");

//es6
let firstname1 = "rutvi";
let lastname1 = "soni";
console.log(`My name is ${firstname1}. My last name is ${lastname1}`)

//we can add expressions too
//es5
let a = 30;
let b = 20;
console.log('sum =' + (a + b) + `\nnot ` + (2 * a + b) + `.`);

//es6
console.log(`sum = ${a+b} 
not ${2*a+b}.`);