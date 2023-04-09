const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let visited = Array.from({length: n}, () => Array(n).fill(false));
const town = Array.from({length: n}, () => []);
const heights = [];
let [startY, startX] = [-1, -1];
let target = 0;
let line = 1;
for(let i = 0; i < n; i++) {
    const row = input[i + line].split('');
    for(let j = 0; j < n; j++) {
        town[i].push(row[j]);
        if(row[j] === 'P') {
            [startY, startX] = [i, j];
        }
        if(row[j] === 'K') {
            target += 1;
        }
    }
}
line += n;
for(let i = 0; i < n; i++) {
    heights.push(input[i + line].split(' ').map(Number));
}

const uniqueHeights = [...new Set(heights.flat())].sort((a, b) => a - b);
let left = 0;
let right = 0;
let middle = 0;

for(let i = 0; i < uniqueHeights.length; i++) {
    if(uniqueHeights[i] === heights[startY][startX]) {
        right = i;
        middle = i;
        break;
    }
}

let answer = 1_000_001;
const directions = [
                    [-1, -1], [-1, 0], [-1, 1], 
                    [0, -1], [0, 1], 
                    [1, -1], [1, 0], [1, 1]
                  ];

const dfs = (y, x) => {
    visited[y][x] = true;
    
    if(town[y][x] === 'K') cnt += 1;
    
    for(const [plusY, plusX] of directions) {
        const nextY = y + plusY;
        const nextX = x + plusX;
        if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
        if(visited[nextY][nextX]) continue;
        if(heights[nextY][nextX] < uniqueHeights[left] || heights[nextY][nextX] > uniqueHeights[right]) continue;
        dfs(nextY, nextX);
    }    
};

while(left <= middle && right < uniqueHeights.length) {
    while(true) {
        visited = Array.from({length: n}, () => Array(n).fill(false));
        cnt = 0;
        dfs(startY, startX);
        if(right < uniqueHeights.length - 1 && cnt < target) right += 1;
        else break;
    }
    if(cnt === target) {
        answer = Math.min(answer, uniqueHeights[right] - uniqueHeights[left]);
    }
    left += 1;
}

console.log(answer);