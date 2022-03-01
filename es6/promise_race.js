// let data = Promise.all
// let data = Promise.allSettled
let data = Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 Second")
        },2000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5 Second")
        },5000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4 Second")
        },4000);
    })
])
data.then((item) => {
    console.log("then block", item)
}).catch((error) => {
    console.log("Catch block", error)
})
    