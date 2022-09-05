const countTrue1 = [true, false, false, true, false];
const lengthArr = countTrue1.filter(value => value === true).length;
console.log(lengthArr);

const countTrue2 = [false, false, false, false];
const lengthArr2 = countTrue2.filter(value => value === true).length;
console.log(lengthArr2);

const countTrue3 = [];
let length = countTrue3.length;
console.log(length);
