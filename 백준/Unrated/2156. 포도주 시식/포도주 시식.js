const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const wine = input.map(Number);
const n = wine[0];
const dp = Array(n+1).fill(0);

dp[1] = wine[1];
dp[2] = wine[1] + wine[2];

let i = 3;
while(i <= n) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + wine[i], dp[i - 3] + wine[i - 1] + wine[i]);
    i += 1;
}

console.log(dp[n]);