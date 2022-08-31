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

//SET

// const arr = [1, 2, 2, 4, 5, 4, 7, 1];
// const set = new Set(arr);
// console.log(set);

// const students = ['Alex', 'Anna', 'Oleg', 'Alex'];
// const set1 = new Set(students);

// console.log(unique(set1));

// set1.add('Andrey');
// set1.delete(value);
// set1.has(value);
// set1.clear();
// set1.size;

// for(let value of set1){
//     console.log(value);
// }

// console.log(set1);

// set1.forEach((value, valueAgain,set) =>{
//     console.log(value, valueAgain);
// });

// console.log(set1.values());
// console.log(set1.keys());
// console.log(set1.entries());

// function unique(arr) {
//     return Array.from(new Set(arr)); // избавление от дубликатов
// }

//WEAKMAP - WEAKSET

// let user = {name: 'Ivan'};

// // const arr = [user];
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(user);
// console.log(map.has(user));//если на обьект удалена ссылка вне коленции в коллекции тоже удаляется

// console.log(map);
// let cash = new WeakMap(); // может иметь в ключах только обьект


// function cashUser (user){
//     if(!cash.has(user)){
//         cash.set(user, Date.now());
//     }

//     return cash.get(user);
// }

// let lena = {name: 'elena'};
// let alex = {name: 'Alex'};

// cashUser(lena);
// cashUser(alex);

// lena = null;

// console.log(cash.has(lena));
// console.log(cash.has(alex));

//WeakSet 
//add, has, delete   значения только обьекты и всего 3  метода

// let messages = [
//     {text: 'Hello', from: 'John'},
//     {text: 'World', from: 'Alex'},
//     {text: '...', from: 'M'},
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);

// readMessages.add(messages[0]);
// messages.shift();
// console.log(readMessages.has(messages[0]));

//DATE

// const now = new Date();
// //  new Date.parse('2022-08-20');
// console.log(now.setHours(40));
// console.log(now);



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3; //Возведение в степень
// }

// let end = new Date();

// console.log(`Цикл отработал за ${end - start} ms`);

// const endTime = '2022-08-20';

// function timeValues(endTime){
//     const t = Date.parse(endTime)- Date.parse(new Date()),
//           days = Math.floor(t / (1000 * 60 * 60 * 24)),
//           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//           minutes = Math.floor((t / 1000 / 60) % 60),
//           seconds = Math.floor((t / 1000) % 60);

//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };

// }

// function setClock(selector, endTime){
//     const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);
    
//     function updateClock(){

//         const values = timeValues(endTime);

//         days.innerHTML = values.days;
//         hours.innerHTML = values.hours;
//         minutes.innerHTML = values.minutes;
//         seconds.innerHTML = values.seconds;

//         if(values.total<=0){
//             clearInterval(timeInterval);
//         }
//     }
//     updateClock();
// }

// setClock('.timer',endTime);

//MutationObserver

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true
// });

// observer.disconnect();

//Functions-constructors

// function User(name, id) { //Создание конструктора 
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`User ${this.name} is leave`);
// };

// const ivan = new User('Ivan', 28); // Вызов контруктора
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

