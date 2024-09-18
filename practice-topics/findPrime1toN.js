function sieveOfEratosthenes(n) {
    // Create an array of boolean values, initialized to true
    const primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            // mark all multiples of i as false (not prime)
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    // collect primes
    const primeNum = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            primeNum.push(i)
        }
    }

    return primeNum
}

console.log(sieveOfEratosthenes(11));
console.log(sieveOfEratosthenes(10));