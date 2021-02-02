const num1 = [12,34,56,25,41];
const num2 = [9,13,38,59];

const num3 = [45,56,67,83,97];

// old system
const all = num1.concat(num2).concat([455,67]).concat(num3);
// console.log(all);
// new system
const all_man = [...num1,...num2,...num3];
console.log(all_man);

var sadiq = 230 ;
var minister = 340 ;
var sochib = 270 ;

var maximum = Math.max(sadiq,sochib,minister);
// console.log(maximum);

// array te maximum number ber kora
var array = [12,34,5,63,55,10,98,76];
var maximum1 = Math.max(...array);
// console.log(maximum1);


var maximumu2 = Math.max(...all_man);
console.log(maximumu2);