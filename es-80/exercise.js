const user = {
  id: 1,
  name: "John",
  age: 25,
};
localStorage.user=JSON.stringify(user)
let user2=JSON.parse(localStorage.user)
console.log(user2)


/*localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));*/