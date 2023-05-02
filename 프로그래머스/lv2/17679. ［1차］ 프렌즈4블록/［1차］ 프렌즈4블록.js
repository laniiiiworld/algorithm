function solution(m, n, board) {
    const graph = Array.from({length: n}, () => []);
    for(let i = m - 1; i >= 0; i--) {
        const row = board[i].split('');
        for(let j = 0; j < n; j++) {
            graph[j].push(row[j]);
        }
    }
    
    const stack = [];
    const coordinates = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const findRemoveBlocks = () => {
        let isFind = false;
        
        for(let y = 0; y < n; y++) {
            for(let x = 0; x < m; x++) {
                if(graph[y][x] === ' ') continue;
                if(y + 1 === n || x + 1 === m) continue;
                
                let isEqual = true;
                const nowBlock = graph[y][x];
                for(const [plusX, plusY] of coordinates) {
                    if(graph[y][x] === ' ') {
                        isEqual = false;
                        break;
                    }
                    if(plusY === n || plusX === m) {
                        isEqual = false;
                        break;
                    }
                    const nextX = x + plusX;
                    const nextY = y + plusY;
                    if(graph[nextY][nextX] !== nowBlock) {                        
                        isEqual = false;
                        break;
                    }
                }
                if(!isEqual) continue;
                for(const [plusX, plusY] of coordinates) {
                    const nextX = x + plusX;
                    const nextY = y + plusY;
                    stack.push([nextX, nextY]);
                    isFind = true;
                }
            }
        }
        
        return isFind;
    };
    
    const removeBlocks = () => {
        while(stack.length) {
            const [x, y] = stack.pop();
            graph[y][x] = '';
        }
        
        for(let i = 0; i < n; i++) {
            graph[i] = graph[i].join('').padEnd(m, ' ').split('');
        }
    };
    
    while(findRemoveBlocks()) {
        removeBlocks();
    }
    
    return n*m - graph.reduce((sum, row) => sum += row.join('').replaceAll(' ', '').length, 0);
}