let a = 2;
let b = '2';
let c = 2.1;
let d = true;
let e = [1, 2];
let f = {
    name: 'Guna'
};

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e); // object - array's are object in JS
console.log(typeof f); // object - object

console.log(Array.isArray(e)) // true