// Symbols

 const sym1 = Symbol('my identifier');
 const sym2 = Symbol('my identifier');

//  console.log(`Symbol is`, sym1);
//  console.log(`Typeof symbol is`, typeof sym1);

console.log(sym1 === sym2)

const a = "this is"
const b = "this is"

console.log (a === b)

const k1 = Symbol();
const k2 = Symbol();

myObj ={};
myObj[k1] = "rutvi";
myObj[k2] = "soni";
myObj["name"] = "Good boy";

console.log(myObj)
console.log(myObj[k1])
console.log(myObj[k2])

//symbols are ignored in for in loop
for (key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));