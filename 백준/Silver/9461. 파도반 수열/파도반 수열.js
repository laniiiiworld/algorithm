const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const numbers = [];
for(let i = 1; i <= t; i++) {
    numbers.push(Number(input[i]));
}
const n = Math.max(...numbers);
const dp = Array(n + 1).fill(1);
dp[4] = 2;
dp[5] = 2;
for(let i = 6; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
}

console.log(numbers.map(v => dp[v]).join('\n'));