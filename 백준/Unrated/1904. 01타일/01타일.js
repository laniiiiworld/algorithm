const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const dp = Array(n+1).fill(0);

dp[1] = 1;
dp[2] = 2;

let i = 3;
while(i <= n) {
    dp[i] = (dp[i-1] + dp[i-2]) % 15746;
    i += 1;
}

console.log(dp[n]);