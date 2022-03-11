export{}

class App{
    name:string="fname"
    constructor(name:string)
    {
        this.name=name
        // console.log("Constructor called")
    }
    getName():string
    {
        return this.name
        // console.log(this.name)
    }
}
let a1 = new App('lname');
console.log(a1.getName())
// let a1= new App();
// a1.getName();