const users = [];


const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };
const user3 = { id: 3, name: "Charlie" };

users.push(user1, user2, user3);

console.log(users);


const newUser = { id: 4, name: "David" };
users.push(newUser);


const userToUpdate = users.find(user => user.id === 2);
userToUpdate.name = "Bob Updated";

users.splice(users.findIndex(user => user.id === 3), 1);

console.log(users);


const person = {
    name: "Nguyen Van A",
    age: 30,
    city: "Ha Noi"
  };
  

  person.email = "noname@email.com";
  

  delete person.age;
  
  console.log(person);

