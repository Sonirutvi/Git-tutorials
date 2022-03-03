"use strict";
exports.__esModule = true;
var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Users.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users;
}());
var u1 = new Users('Rutvi', 20, 'xyz@test.com');
u1.displayVal();
