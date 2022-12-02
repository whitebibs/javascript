function repeatHello(callback){
    setInterval(callback,1000);
 }
 let saluta= () => console.log("Hello");
 repeatHello(saluta);



