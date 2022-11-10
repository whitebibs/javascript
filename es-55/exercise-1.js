// Class definition
class Person{
    firstName=""; //questi fields devo metterli anche in questi?
    lastName=""; 
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
