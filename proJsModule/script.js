'use strict';

//JSON
// const persone = {
//     name: 'Alex',
//     phone: '+23213124124',
//     parents: {
//         mom: 'Olga',
//         dad: 'Moke'
//     }
// };

// console.log(JSON.stringify(persone)); //for server
// console.log(JSON.parse(JSON.stringify(persone))); //for JS

// const clone = JSON.parse(JSON.stringify(persone)); //full clone object 'persone';

//Promise

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);

//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
            
//         }, 2000);
//     });

// }).then(data => {
//     data.mod = true;
//     return data;
    
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.log('Error');
// }).finally(() => {
//     console.log('Finally');
// });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     }); 
// };

// test(1000).then(() => console.log('1000ms'));

// Promise.all([test(1000),test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000),test(2000)]).then(() => {
//     console.log('All');
// });