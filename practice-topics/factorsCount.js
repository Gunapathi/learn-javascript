function factorsCount(n) {
    const factorsCount = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            factorsCount[j] += 1;
        }
    }

    return factorsCount;
}

console.log(factorsCount(11));
console.log(factorsCount(10));