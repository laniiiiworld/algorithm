const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const dp = [];
for(let i = 1; i <= n; i++) {
    dp.push(Number(input[i]));
}
for(let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] * dp[i]);
}

console.log(Math.max(...dp).toFixed(3));