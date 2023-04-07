const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = []; //answer
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

let indexA = 0;
let indexB = 0;
while(arr.length < n + m) {
    if(indexA === n) {
        arr.push(...arrB.slice(indexB));
        break;
    }
    if(indexB === m) {
        arr.push(...arrA.slice(indexA));
        break;
    }
    
    if(arrA[indexA] <= arrB[indexB]) {
        arr.push(arrA[indexA]);
        indexA += 1;
    } else {
        arr.push(arrB[indexB]);
        indexB += 1;
    }
}

console.log(arr.join(' '));