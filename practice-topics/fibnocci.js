function fibnocci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

// console.log(fibnocci(10))

// function fun(a = 10, b = 1) {
//     return a + b;
// }

// console.log(fun(null, 10));
// console.log(fun(undefined, 10));

// 
console.log(num);
var num;
num = 10;