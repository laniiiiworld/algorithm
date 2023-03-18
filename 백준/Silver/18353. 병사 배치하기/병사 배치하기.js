const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = Array(n).fill(1);

for(let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[j] <= arr[i]) continue;
        dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
}

console.log(n - Math.max(...dp));