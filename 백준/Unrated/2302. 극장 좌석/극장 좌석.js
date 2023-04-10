const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const vips = [0];
for(let i = 2; i < m + 2; i++) {
    vips.push(Number(input[i]));
}
vips.push(n + 1);

const dp = Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

let answer = 1;
for(let i = 1; i <= m + 1; i++) {
    const count = vips[i] - vips[i - 1] - 1;
    answer *= dp[count];
}
console.log(answer);