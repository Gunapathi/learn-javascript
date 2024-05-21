function test() {
    let a = 10;

    function test1() {
        console.log(a)
    }

    return test1;
}

let fun = test();
console.log(fun)

fun();