const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let line = 1;
let target = 0; //전체 집의 개수
let [startY, startX] = [-1, -1]; //시작 위치
const town = Array.from({length: n}, () => []); //마을 정보
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
const heights = []; //고도 정보
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
let count = 0;
const directions = [
                    [-1, -1], [-1, 0], [-1, 1], 
                    [0, -1], [0, 1], 
                    [1, -1], [1, 0], [1, 1]
                  ];
const dfs = (y, x, visited) => {
    visited[y][x] = true;
    
    if(town[y][x] === 'K') count += 1;
    
    for(const [plusY, plusX] of directions) {
        const nextY = y + plusY;
        const nextX = x + plusX;
        if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
        if(visited[nextY][nextX]) continue;
        if(heights[nextY][nextX] < uniqueHeights[left] || heights[nextY][nextX] > uniqueHeights[right]) continue;
        dfs(nextY, nextX, visited);
    }    
};

while(left <= middle && right < uniqueHeights.length) {
    while(true) {
        const visited = Array.from({length: n}, () => Array(n).fill(false));
        count = 0;
        dfs(startY, startX, visited);
        if(right < uniqueHeights.length - 1 && count < target) right += 1;
        else break;
    }
    if(count === target) { //dfs 결과 모든 집을 방문 가능한 경우
        answer = Math.min(answer, uniqueHeights[right] - uniqueHeights[left]);
    }
    left += 1;
}

console.log(answer);