const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ');

//X'i의 값 = Xi > Xj를 만족하는 서로 다른 좌표의 개수
const numbersSet = [...new Set(arr)].sort((a, b) => a - b);
const numbersMap = new Map();
for(const index in numbersSet) {
    numbersMap.set(numbersSet[index], index); //index = count
}
const answer = arr.map(v => numbersMap.get(v));
console.log(answer.join(' '));