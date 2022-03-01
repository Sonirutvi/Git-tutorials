"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(name) {
        this.name = "fname";
        this.name = name;
        // console.log("Constructor called")
    }
    App.prototype.getName = function () {
        return this.name;
        // console.log(this.name)
    };
    return App;
}());
var a1 = new App('lname');
console.log(a1.getName());
// let a1= new App();
// a1.getName();
