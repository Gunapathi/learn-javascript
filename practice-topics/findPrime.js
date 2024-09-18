// helper function to find factors
function findFactors(n) {
    let count = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += 1; // Count i as a factor

            if (i !== n / i) {
                count += 1; // Count the complementary factor only if it's different
            }
        }
    }

    return count;
}

function findPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is prime

    const res = findFactors(num);
    return res === 2;
}

console.log(findPrime(11)); // true
console.log(findPrime(10)); // false