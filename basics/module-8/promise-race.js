/**Promise.race() works by resolving or rejecting as soon as one of the promises in the iterable (the array) settles (either resolves or rejects), regardless of the state of the other promises in the iterable.

So, as soon as the first promise in the array settles (either resolves or rejects), Promise.race() will immediately resolve or reject with the value or reason of that promise. It won't wait for the other promises to settle. This behavior makes it useful for scenarios where you want to perform some action as soon as any one of multiple asynchronous operations completes. */

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));