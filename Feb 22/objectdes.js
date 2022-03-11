const biodata ={
    name : "rutvi",
    age : "20",
    hobby : {
        first : 'reading',
        sec : "playing"
    }
}
 
//let {name , age} = biodata;

let {name, age, hobby} = biodata;

//console.log(`my name is ${name} and my age is ${age}`);

console.log(`my name is ${name}. My age is ${age} and I love ${hobby.first}`);