class Employee{
    constructor(givenName , givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience; 
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this cpmpany is the best.`;
    }
    joiningYear(){
        return 2022 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
    
}

// rutvi = new Employee("rutvi", "2", "Division");
// console.log(rutvi.joiningYear());
console.log(Employee.add(34,5))