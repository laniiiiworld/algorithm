const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];
const t = Number(input[0]);
let line = 1;

while(line <= t) {
    const n = Number(input[line]);
    const dp = Array.from({length: n + 1}, () => [0, 0]);
    let i = 0;
    while(i <= n) {
        if(i === 0) {
            dp[i][0] += 1;
        } else if(i === 1) {
            dp[i][1] += 1;
        } else {
            dp[i] = [dp[i-1][0] + dp[i-2][0], dp[i-1][1] + dp[i-2][1]];
        }
        i += 1;
    }
    line += 1;
    answer.push(dp[dp.length - 1]);
}

console.log(answer.map(items => items.join(' ')).join('\n'));