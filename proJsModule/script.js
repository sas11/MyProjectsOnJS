'use strict';

//JSON
const persone = {
    name: 'Alex',
    phone: '+23213124124',
    parents: {
        mom: 'Olga',
        dad: 'Moke'
    }
};

console.log(JSON.stringify(persone)); //for server
console.log(JSON.parse(JSON.stringify(persone))); //for JS

const clone = JSON.parse(JSON.stringify(persone)); //full clone object 'persone';
