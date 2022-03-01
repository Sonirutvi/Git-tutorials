export{}

interface userType{
    name:string,
    age:number,
    getName:()=>string
}
let users:userType = {
    name:'fname',
    age:20,
    getName:function()
    {
        return "fname"
    }
}

// console.log(users)
console.log(users.getName())