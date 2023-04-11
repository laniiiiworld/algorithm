const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = Array(n).fill(1);

for(let i = 1; i < n; i++) {
    let max = 0;
    for(let j = 0; j < i; j++) {
        if(arr[i] >= arr[j]) continue;
        max = Math.max(max, dp[j]);
    }
    dp[i] = max + 1;
}

console.log(n - Math.max(...dp));