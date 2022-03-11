class Person{
    static name = "rutvi";
    static height = 150;

    static getUserInfo(){
        console.log(`My namae is ${this.name} and my height is ${this.height}.`);
    }

    static setUserHeight(value){
        this.height = value;
    }
}

Person.getUserInfo(); 
Person.setUserHeight(200);
Person.getUserInfo();