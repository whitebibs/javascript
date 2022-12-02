const isLogged = true;

function promise(isLogged){
    return new Promise((resolve,reject)=>{
    if(isLogged==true){
    resolve(Math.random())
   }else{
    reject(new Error("Error"))
   }
})}

function secondPromise(number){
    return new Promise((resolve,reject)=>{
if (number>0.5){
    resolve({name:"John", age:24})
}else{
    reject(new Error("errore,numero minore di 0,5"))
}
    })
}

promise(isLogged)  
    .then((random) => {
        console.log(random)  
        return random;
    })
    .then((number) => secondPromise(number))  
    .then((user) => console.log(user))  
    .catch((err) => console.error(err.message))
