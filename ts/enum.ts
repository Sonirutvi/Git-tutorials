export{}
enum Days{
    mon=10,tue,wed,thu
    // mon = "mon", tue="tue"
}

//use with function
function whichday(day:Days)
{
    return day
}

// let whichday:Days;
// whichday=Days.tue

console.log(whichday(Days.tue))
// console.log(whichday==="tue")
// console.log(whichday==="sat")

