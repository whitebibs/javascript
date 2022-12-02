const number = 15;

let promise= new Promise((resolve, reject)=>{
    if(number>10){
        resolve(number);
    }else{
        reject(number)
    }
})
promise
.then((success)=>console.log("è un successo"))
.catch((error)=> console.log("errore, è minore di 10"))



