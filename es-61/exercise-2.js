const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
console.log(id, firstName, lastName, age);



let {id:id2, firstName:first, lastName:last, age:age2}=person;
console.log(id2,first,last,age2);

