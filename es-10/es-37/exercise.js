function printName(){
   const helloName="Hello John";
    function inner(){
        return helloName;
    }
    return inner;
}
console.log(printName()())


/*function printName(){
   const helloName="Hello John";
    function inner(){
       console.log (helloName);
    }
    return inner;
}
printName()()*/

