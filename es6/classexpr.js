//named class expression   
// const Website = class Geek {
// constructor(name){
// 	this.name = name;
// }
// websiteName() {
// 	return this.name;
// }
// };

// const x = new Website("xyz");
// console.log(x.websiteName());

//unnamed class expression
const Website = class {
constructor(name) {
	this.name = name;
}
returnName() {
	return this.name;
}
};

console.log(new Website("XYZ").returnName());