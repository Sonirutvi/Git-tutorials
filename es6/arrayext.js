//Arrray extensions: Array.of(), Array.from(), Array find(), Array findeIndex()


//Array.of()

// let x = new Array(5) //es5
// let x = Array.of("5","6") //es6 
// console.log(x.length) //length of string
// console.log(x[0]) //index number

// //Array.from()

function abc(){
    console.log(arguments)
    let arr=[]
    for(let i of arguments){
        arr.push(i)
    }
    return arr
    return Array.from(arguments)
}

let x=abc(3,4,5,6)
console.log(x)

// //Array find()

let arr=[1,2,3,4,5,6,7,10]
console.log(arr.indexOf(2))

console.log(arr.find(e=>e%2===0))//first even number
console.log(arr.findIndex(e=>e%2===0))//find index

// //Array findeIndex() for object

let student = [{name:'xyz', age:27},
{name:'xyz', age:28},
{name:'xyz', age:29}]

console.log(student.findIndex(e=>e.age>27))//find index