'use strict';
//ClassList
// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'sfas'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //добавляет класс если нету и напротив.

// if(btns[1].classList.contains('red')){ //проверяет наличие класса
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // }else{
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.matches('button.red')) { //тег содержит селектор, делегирование событий
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

//SetTimeout SetInterval
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;


// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame,10);

//     function frame() {
//         if(pos == 300){
//             clearInterval(id);
//         }else{
//             pos++;
//             elem.style.top = `${pos}px`;
//             elem.style.left = `${pos}px`;
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);

// });

// const text = 'hello';
// const timerId = setTimeout(logger,2000,text); //функция которая запустится через установленое время

// function logger() {
//     if(i===3){
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// let id = setTimeout(function log(){//рекурсия сет таймаута
//     console.log('hello');
//     id = setTimeout(log, 500);
// },500);

//Map

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newUserObject = Object.fromEntries(userMap);
// console.log(newUserObject);

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const budget = [5000, 15000, 25000];

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// shops.forEach((shops,i) =>{
//     map.set(shops,budget[i]);
// });

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys()

// const goods = [];
// for(let shop of map.keys()){
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for(let price of map.values()){
// }
// for(let [shop,price] of map.entries()){
//     console.log(shop,price);
// }

// map.forEach((value,key,map) => {
//     console.log(key,value);
// });