//map : we can use any type of key or value

const myMap = new Map

const key1 = 'mystr', key2 = {}, key3 = function(){};

//set map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

// getting the values from the map

let value1 = myMap.get(key2);
console.log(value1);

//get the size of the map
console.log(myMap.size);

//get only keys
for (let key of myMap.keys()) {
    console.log('key is', key);
}

//get only values
for (let value of myMap.values()) {
    console.log('value is', value)
}

//you can loop through a map using for each loop 
myMap.forEach((value, key )=>{
    console.log('Value is:', value);
    console.log('key is:', key);
})

//converting map to array
let myArray = Array.from(myMap);
console.log('Map to array is:', myArray);

//converting map keys to array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to key array is:', myKeysArray);

//converting map values to array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is:', myValuesArray);