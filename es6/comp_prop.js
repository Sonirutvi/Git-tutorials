let type = `test`
let obj = {
    name: `code`, 
    last: `improve`, 
    [type]: `this is computed value`,
    first_name : `codes`,
    first_email : `email`,
}

console.log(obj.name)

console.log(obj[type])

let firstType = `email`

// console.log(obj[`first_name`])
console.log(obj[`first_`+ firstType])

//for class
class Person{
    constructor(name){
        this.name = name
    }
    get[type](){
        return this.name
    }
}

let person = new Person(`code Improve`)

console.log(person.test)