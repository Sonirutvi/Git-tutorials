export {}
function users<T>(data:T):T
{
    return data
}

console.log(users({name:"rutvi", age:20}))
// console.log(users({name:"rutvi", age:20}).name)