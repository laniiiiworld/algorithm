const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const getCombinations = (arr, n) => {
    if(n === 1) return arr.map(v => [v]);
    
    let result = [];
    
    arr.forEach((fixed, index) => {
        const rest = arr.slice(index + 1);
        getCombinations(rest, n - 1).forEach(items => result.push([fixed, ...items]));
    });
    
    return result;
};
const [n, m] = input[0].split(' ').map(Number);
const blanks = [];
let graph = input.slice(1).map((row, i) => {
                    return row.split(' ').map((v, j) => {
                               if(v === '0') {
                                   blanks.push([i, j]);
                               }
                               return Number(v);
                            });
                });
const dfs = (graph, row, col, before) => {
    if(row < 0 || col < 0 || row === n || col === m) return graph;
    if(before !== 2 && before !== -2) return graph;
    if(graph[row][col] === 1 || graph[row][col] === -2) return graph;
    
    graph[row][col] = -2;
    
    graph = dfs(graph, row + 1, col, graph[row][col]);
    graph = dfs(graph, row - 1, col, graph[row][col]);
    graph = dfs(graph, row, col + 1, graph[row][col]);
    graph = dfs(graph, row, col - 1, graph[row][col]);
    
    return graph;
};

let answer = 0;
let count = 1;
const combinations = getCombinations(blanks, 3); //빈 칸들 중 3곳에 벽을 설치하는 조합

for(const walls of combinations) {
    let newGraph = [...graph.map(row => [...row])];
    //3개의 벽을 설치한다.
    for(const [row, col] of walls) {
        newGraph[row][col] = 1;
    }
    //바이러스 전염
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            newGraph = dfs(newGraph, i, j, newGraph[i][j]);
        }
    }
    //빈 칸의 개수(=안전한 영역의 크기)를 센다.
    const sum = newGraph.reduce((sum, row) => {
        const rowSum = row.reduce((sum, v) => sum += (v === 0)? 1 : 0, 0);
        return sum += rowSum;
    }, 0);
    //안전한 영역의 크기가 늘었다면 정답을 바꿔준다.
    if(answer < sum) {
        answer = sum;
    }
}

console.log(answer);