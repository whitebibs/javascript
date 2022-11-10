const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);
person2.firstName="Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

/*Senza il metodo copiamo il riferimento della locazione di memoria,
dato che gli oggetti vengono passati per riferimento e non per valore a differenza dei dati primitivi. 
Quindi prima toccando person2 toccavamo lo stesso riferimento di person1 modificandolo.
Con il metodo creiamo un nuovo oggetto vuoto a cui passiamo il contenuto presente in person1.Lo cloniamo e 
facendo cosi diventano 2 oggetti che puntano a locazioni di memoria diversa.*/
