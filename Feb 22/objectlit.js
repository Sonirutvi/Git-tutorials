//Exp 1
let name = "rutvi";

    var obj={ 
        name,
    };
    console.log(obj);

//Exp 2
let n = "student";
let obj1 ={
    [ n + "name"] : "rutvi",
    tech : "react",
    detail : function(){
        return `${this.studentname} is a student of ${this.tech}`
    }
    };
    console.log(obj1);
    console.log(obj1.detail());

//Exp 3
let obj2 ={
    name : "rutvi",  
    'show name'(){
        console.log(this.name)
    }
};
    console.log(obj2['show name']());
