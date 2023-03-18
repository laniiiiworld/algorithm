const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const dp = Array(n+1).fill(Infinity);

dp[0] = 0;
dp[1] = 0;
dp[2] = 1;

let i = 3;
while(i <= n) {
    if(i % 3 === 0) {
        dp[i] = dp[i / 3] + 1;
    }
    if(i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
    
    i += 1;
}

console.log(dp[n]);