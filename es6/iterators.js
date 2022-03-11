//iterators

function fruitsIterators(values){
    let nextIndex = 0;
    //we will return an object
    return{
        next: function(){
            if (nextIndex < values.length){
            //we will return this object
            return{
                value: values[nextIndex++],
                done: false
            }
        }
        else{
            //we will return below object with only done
            return{
                done: true
            }
        }
        }
    }
}

const myArray = ['Apple','Grapes','Oranges'];

console.log("My Array is", myArray)

//using the iterator

const fruits = fruitsIterators(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)