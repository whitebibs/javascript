class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set age(val) {
        this._age = val;
    }
    get age() {
        return this._age;
    }
    set firstName(val2) {
        this._firstName = val2;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(val3) {
        this._lastName = val3;
    }
    get lastName() {
        this._lastName;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);