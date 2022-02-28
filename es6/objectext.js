//object extension  Object.assign()  Object.is()

//Object.assign()
let student={name:'first name', age:28}
let studentdata={age:27, rollno:10}
let employee=Object.assign({}, student, studentdata);

console.log(student)
console.log(employee)

//Object.is()
let x = 1
// let y = 1
let y = 2
console.log(x===y)
console.log(Object.is(x,y))