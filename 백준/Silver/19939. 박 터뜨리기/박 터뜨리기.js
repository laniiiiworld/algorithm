const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);
let sum = 0;

for(let i = 1; i <= k; i++) {
    sum += i;
}

if(sum > n) {
    console.log(-1);
} else {
    n -= sum;
    console.log(n % k? k : k - 1); //나머지 공을 k개에 분산시키기
}