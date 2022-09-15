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

//Array functions
//filter

// const names = ['ivan', 'alex','katerina', 'logomanson'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map

// const answers = ['ivan','annA', 'HellO'];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);

//every/some

// const some = [4, 'dwqe', 'fsaf'];

// console.log(some.some((item) => typeof(item) === 'number')); // один элемент
// console.log(some.every((item) => typeof(item) === 'number')); // все элементы

//reduce

// const arr = [4, 5, 6, 1, 3, 2];

// const res = arr.reduce((sum, current) => sum + current, 3); // аргумент 3 начальное значение
// console.log(res);

// const fruit = ['apple', 'orange', 'lemon'];

// const res = fruit.reduce ((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);