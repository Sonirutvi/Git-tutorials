export{}
class Users{
    constructor(public name,public age,public email)
    {

    }
    displayVal()
    {
        console.log(this.name, this.age, this.email)
    }
}

const u1 = new Users('Rutvi', 20, 'xyz@test.com');
u1.displayVal();