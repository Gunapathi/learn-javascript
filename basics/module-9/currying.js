// let sum = function (x, y) {
//     console.log(x + y);
// }

// sum(2, 3)

// currying
let sumCurried = function (x) {
    return function (y) {
        console.log(x + y);
    }
}

let curriedFunction = sumCurried(2);

curriedFunction(3)