export{}
//what is inheritance
//make a parent class
//make a child class
//inherit a class

class Parent{
    name;
    setName(name){
        this.name=name
    }
}

class Child extends Parent{
    
    getName()
    {
        return this.name
    }
}

let c1 = new Child();
c1.setName("lname")
console.log(c1.getName())