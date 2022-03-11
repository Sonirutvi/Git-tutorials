var person = {
    name: `rutvi`, 
    age: 20,

    // get getname(){
    //     return this.name.toUpperCase();
    // },

    set setname(n){
        return this.name = n.toUpperCase();
    }
};

person.setname = "xyz"; //set
// console.log(person.getname);
console.log(person); //set 