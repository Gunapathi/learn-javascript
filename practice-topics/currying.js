// EXAMPLE 1
const logEvent = level => message => {
    return `${level}: ${message}`;
}

const infoLog = logEvent("INFO");
const infoError = logEvent("ERROR");

console.log(infoLog('User logged in'));
console.log(infoError('failed to load user'));

// EXAMPLE 2
const configureSetting = setting => value => `${setting}: ${value}`;

const setFontSize = configureSetting("Font Size");
const setLineHeight = configureSetting("Line Height");

console.log(setFontSize("16px")); // Output: Font Size: 16px
console.log(setLineHeight("1.5em")); // Output: Line Height: 1.5em

// EXAMPLE 3
const multiply = (x, y) => console.log(x * y);

const multiplyBy2 = multiply.bind(this, 2); // 2 will be placed in the value of x and waiting for y
const multiplyBy3 = multiply.bind(this, 3);
const multiplyBy2And3 = multiply.bind(this, 2, 3); // 2 and 3 will be placed in the value of x and y
const multiplyBy = multiply.bind(this); // x and y will passed from params
const multiplyBy4 = multiply.bind(this, 4); // 4 will be placed in the value of x and waiting for y

multiplyBy2(5); // Output: 10
multiplyBy3(5); // Output: 15
multiplyBy2And3(5); // Output: 6
multiplyBy(2, 2); // Output: 4
multiplyBy4(2, 2); // Output: 8 -> 2 will be placed for y and another 2 will not be considered