const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const dp = Array.from({length: n + 1}, () => Array(10).fill(0));

for(let j = 1; j < 10; j++) {
    dp[1][j] = 1;
}

for(let i = 2; i <= n; i++) {
    for(let j = 0; j < 10; j++) {
        if(j > 0) dp[i][j] += dp[i - 1][j - 1];
        if(j < 9) dp[i][j] += dp[i - 1][j + 1];
        dp[i][j] %= Number(1e9);
    }
}

let answer = 0;
for(const count of dp[n]) {
    answer += count;
    answer %= Number(1e9);
}
console.log(answer);