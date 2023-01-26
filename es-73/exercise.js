function printAsyncName(callback, name){
 setTimeout(()=>callback(),1000);
 setTimeout(()=> console.log(name),2000)
 name="bibi";
}
printAsyncName(()=>console.log("Hello"), "Bianca")



