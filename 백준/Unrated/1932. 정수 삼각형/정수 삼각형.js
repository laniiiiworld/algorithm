const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(v => v.split(' ').map(Number));

for(let i = 1; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        if(j === 0) {
            arr[i][j] += arr[i - 1][j];
        } else if (j === i) {
            arr[i][j] += arr[i - 1][j - 1];
        } else {
            arr[i][j] += Math.max(arr[i - 1][j], arr[i - 1][j - 1]);
        }
    }
}

console.log(Math.max(...arr[n - 1]));