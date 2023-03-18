const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let line = 1;
const answer = [];

while(line <= t) {
    const n = Number(input[line]);
    const dp = Array(n).fill(1);
    let i = 3;
    while(i < n) {
        dp[i] = dp[i - 2] + dp[i - 3];
        i += 1;
    }
    answer.push(dp[n - 1]);
    line += 1;
}

console.log(answer.join('\n'));