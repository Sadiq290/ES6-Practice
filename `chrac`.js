const name1 = "Sadiq";
const name2 = "Rahman";
// old system
const full = name1 + " " + "Ur" + " " + name2;
// New System
const full2 = `${name1} ${"Ur"} ${20+20+90+70} ${name2} `
console.log(full2);
console.log(full);
// old system
const multiline = "My name is Sadiq.\n I am 20 years old.\n I am starting learning programming.\n Are you want to join with me.\n";

// new system
const multiline2 = `My name is Sadiq.
I am 20 years old.
I am starting learning programming.
 Are you want to join with me.`
console.log(multiline2);

