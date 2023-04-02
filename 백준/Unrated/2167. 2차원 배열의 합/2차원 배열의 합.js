const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number); //graph의 크기
let line = 1;

const arr = []; //2차원 배열
arr.push(new Array(m+1).fill(0));
for(let i = 0; i < n; i++) {
    const row = line + i;
    const lineArr = [0];
    // a b
    // c d
    // => c + b + d - a
    for(const value of input[row].split(' ').map(Number)) {
        const col = lineArr.length;
        lineArr.push(lineArr[col - 1] + arr[row - 1][col] + value - arr[row - 1][col - 1]);
    }
    arr.push(lineArr);
}

line += n;

const k = Number(input[line++]);
const answer = [];
for(let index = 0; index < k; index++) {
    const [i, j, x, y] = input[line + index].split(' ').map(Number);
    const result = arr[x][y] - arr[x][j - 1] - arr[i - 1][y] + arr[i - 1][j - 1];
    answer.push(result);
}

console.log(answer.join('\n'));
