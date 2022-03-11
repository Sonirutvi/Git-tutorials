//set stores unique values
const mySet = new Set(); //initialize an empty set

//adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add(10);
mySet.add(false);
mySet.add('that');
console.log('The set looks like this now:', mySet);

// let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}]);
// console.log('New set:', mySet2);

console.log(mySet.size); // get the size of the set

console.log(mySet.has(10));//check wheather set has 10 or not

console.log('Before removal', mySet.has('that'))
mySet.delete('that'); // remove an element from the set
console.log('After removal', mySet.has('that'));