const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const cards = input[1].split(' ').map(Number);
const m = Number(input[2]);
const arr = input[3].split(' ').map(Number);
const myMap = new Map();

for(const card of cards) {
    const count = myMap.get(card) || 0;
    myMap.set(card, count + 1);
}

console.log(arr.map(v => myMap.get(v) || 0).join(' '));