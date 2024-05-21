/**In firstFunction(), myPromise().then() is used to handle the resolution of the Promise. This means that the console.log('second') statement is executed immediately after initiating the Promise, and the resolved value 'I have resolved!' is logged whenever the Promise resolves.

In secondFunction(), the await keyword is used to pause the execution of the function until the Promise resolves. This means that the execution of console.log('second') is delayed until after the Promise resolves. Once the Promise resolves, the resolved value 'I have resolved!' is logged, followed by 'second' which is the result of the subsequent console.log() statement. */

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();