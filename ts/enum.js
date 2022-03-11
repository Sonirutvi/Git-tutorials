"use strict";
exports.__esModule = true;
var Days;
(function (Days) {
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"] = 11] = "tue";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thu"] = 13] = "thu";
    // mon = "mon", tue="tue"
})(Days || (Days = {}));
//use with function
function whichday(day) {
    return day;
}
// let whichday:Days;
// whichday=Days.tue
console.log(whichday(Days.tue));
// console.log(whichday==="tue")
// console.log(whichday==="sat")
