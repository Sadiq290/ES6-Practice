const person = {Name:"Sadiq Ur Rahman", Age:12 , Class:09 , Section:36 , Roll:06};
var name = person.Name;
// console.log(name);

// new system
const {Age,Section,Roll} = person;
console.log(Age,Section,Roll);
