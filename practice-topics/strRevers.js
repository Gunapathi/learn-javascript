function reverse(string) {
    let str = string.split(''); // strings are immutable in js, so split them into arrays
    const len = str.length - 1;

    for (let start = 0; start <= Math.floor(len / 2); start++) {
        let temp = str[start];
        str[start] = str[len - start];
        str[len - start] = temp;
    }

    return str.join('');
}

console.log(reverse('Academy'));