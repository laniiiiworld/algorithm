const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).reverse().map(Number);
let cash = k;
let result = 0;

for(const coin of coins) {
    if(cash === 0) break;
    result += Math.floor(cash / coin);
    cash %= coin;
}

console.log(result);