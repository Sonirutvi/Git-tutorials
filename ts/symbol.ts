export{}

// let s1 = Symbol("d1");
// let s2 = Symbol("d2");
// console.log(s1.toString())

// let data ={             //Use Symbol as key of object
//     [s1]:"Some data"
// }

// console.log(data[s1])

//Use symbol as function of class
let demoF1 = Symbol("d1")
class Demo{
    [demoF1]()
    {
        return "Some data"
    }
}

let d1 = new Demo();
console.log(d1[demoF1]())