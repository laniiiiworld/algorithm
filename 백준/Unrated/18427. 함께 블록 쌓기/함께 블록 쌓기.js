const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, h] = input[0].split(' ').map(Number);
const students = [];
for(let i = 1; i <= n; i++) {
    students.push(input[i].split(' ').map(Number));
}

const dp = Array(h + 1).fill(0);
dp[0] = 1;
for(let id = 0; id < n; id++) {
    const data = [];
    for(let height = 0; height <= h; height++) {
        for(let block = 0; block < students[id].length; block++) {
            if(dp[height] === 0) continue;
            if(height + students[id][block] > h) continue;
            data.push([height + students[id][block], dp[height]]);
        }
    }
    for(const [height, value] of data) {
        dp[height] = (dp[height] + value) % 10007;
    }
}

console.log(dp[h]);