export{}
function Cals( a:number, b?:number):number
{
    return b?a+b:a;
}

console.log(Cals(100,50))
console.log(Cals(100))