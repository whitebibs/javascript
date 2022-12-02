function printAsyncName(callback, name){
 setTimeout(()=>callback("hello"),1000);
 
 setTimeout(()=> console.log(name),2000)
 name="bibi";
}
printAsyncName(()=>console.log("Hello"))
//non so se ho inteso bene la consegna


