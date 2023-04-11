const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const graph = input.slice(1).map(row => row.split(' ').map(Number));
let dp = graph[0];

for(let i = 1; i < n; i++) {
    const row = [0, 0, 0];
    row[0] = Math.min(dp[1] + graph[i][0], dp[2] + graph[i][0]);
    row[1] = Math.min(dp[0] + graph[i][1], dp[2] + graph[i][1]);
    row[2] = Math.min(dp[0] + graph[i][2], dp[1] + graph[i][2]);
    dp = row;
}

console.log(Math.min(...dp));