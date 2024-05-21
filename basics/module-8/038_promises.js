function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee')
            resolve('Order has been received');
        else
            reject('Order has been rejected');
    })
}

function processOrder(order) {
    return new Promise(function (resolve, reject) {
        console.log('Processing order');
        resolve(`${order} and delivered`)
    })
}

// basic promise chaining function

// placeOrder('coffee').then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderProcessed = processOrder(orderPlaced)
//     return orderProcessed;
// }).then(function (orderPlaced) {
//     console.log(orderPlaced);
// })

// async await method
async function serverOrder() {
    try {
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);

        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch (err) {
        console.error(err);
    }
}

serverOrder();