"use strict";
exports.__esModule = true;
// let s1 = Symbol("d1");
// let s2 = Symbol("d2");
// console.log(s1.toString())
// let data ={             //Use Symbol as key of object
//     [s1]:"Some data"
// }
// console.log(data[s1])
//Use symbol as function of class
var demoF1 = Symbol("d1");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[demoF1] = function () {
        return "Some data";
    };
    return Demo;
}());
var d1 = new Demo();
console.log(d1[demoF1]());
