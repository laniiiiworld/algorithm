const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr = []; //answer
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

let indexA = 0;
let indexB = 0;
while(indexA < n && indexB < m) {
    if(arrA[indexA] <= arrB[indexB]) {
        arr.push(arrA[indexA]);
        indexA += 1;
    } else {
        arr.push(arrB[indexB]);
        indexB += 1;
    }
}

if(indexA < n) {
    console.log(arr.join(' ') + ' ' + arrA.slice(indexA).join(' '));
}else if(indexB < m) {
    console.log(arr.join(' ') + ' ' + arrB.slice(indexB).join(' '));
} else {
    console.log(arr.join(' '));
}