const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(row => row.split(' ').map(Number));
const houses = [];
const stores = [];

//n X n 도시
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(graph[i][j] === 0) continue; // 0: 빈 칸
        if(graph[i][j] === 1) houses.push([i, j]); // 1: 집
        else stores.push([i, j]); // 2: 치킨집
    }
}

function solution(n, m, houses, stores) {
    const selectedStores = [];
    const visited = Array(stores.length).fill(false);
    const getSelectedStores = (start, arr) => {
        if(arr.length === m) {
            selectedStores.push(arr);
            return;
        }
        
        for(let i = start; i < stores.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            getSelectedStores(i + 1, [...arr, stores[i]]);
            visited[i] = false;
        }
    };
    const makeChickenDistance = (stores) => {
        return houses.reduce((sum, house) => {
            const [r1, c1] = house;
            return sum += stores.reduce((minDistance, cur) => {
                                    const [r2, c2] = cur;
                                    const distance = Math.abs(r1 - r2) + Math.abs(c1 - c2);
                                    return Math.min(minDistance, distance);
                                }, Infinity);
        }, 0);
    };
    
    getSelectedStores(0, []);
    
    return selectedStores.reduce((minDistance, currentSelected) => {
        const distance = makeChickenDistance(currentSelected);
        return Math.min(minDistance, distance);
    }, Infinity);
}

console.log(solution(n, m, houses, stores));