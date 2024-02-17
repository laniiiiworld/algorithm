function solution(maze) {
    const n = maze.length;
    const m = maze[0].length;
    const getCoordinate = (target) => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(maze[i][j] === target) {
                    return [i, j];
                }
            }
        }
        return [0, 0];
    };
    const getList = (nowY, nowX, target, visited) => {
        const list = [];
        if(maze[nowY][nowX] === target) {
            list.push([nowY, nowX]);
            return list;
        }
        let nextY;
        let nextX;
        for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            nextY = nowY + plusY;
            nextX = nowX + plusX;
            if(nextY < 0 || nextX < 0 || nextY >= n || nextX >= m) continue;
            if(visited[nextY][nextX] || maze[nextY][nextX] === 5) continue;
            list.push([nextY, nextX]);
        }
        return list;
    };
    
    const [rStartY, rStartX] = getCoordinate(1);
    const [bStartY, bStartX] = getCoordinate(2);
    
    let result = Infinity;
    const redVisited = Array.from({length: n}, () => Array(m).fill(false));
    const blueVisited = Array.from({length: n}, () => Array(m).fill(false));
    const queue = [[rStartY, rStartX, bStartY, bStartX, 0, redVisited, blueVisited]];
    redVisited[rStartY][rStartX] = true;
    blueVisited[bStartY][bStartX] = true;
    
    while(queue.length) {
        const [rNowY, rNowX, bNowY, bNowX, turn, redVisited, blueVisited] = queue.shift();
        if(maze[rNowY][rNowX] === 3 && maze[bNowY][bNowX] === 4) {
            result = Math.min(result, turn);
            continue;
        }
        
        const redList = getList(rNowY, rNowX, 3, redVisited);
        const blueList = getList(bNowY, bNowX, 4, blueVisited);
        
        for(const [redY, redX] of redList) {
            for(const [blueY, blueX] of blueList) {
                // 수레끼리 자리를 바꾼 경우
                if(redY === bNowY && redX === bNowX 
                   && blueY === rNowY && blueX === rNowX) continue;
                // 두 수레 같은 칸
                if(redY === blueY && redX === blueX) continue;
                const redNewVisited = redVisited.map(row => [...row]);
                const blueNewVisited = blueVisited.map(row => [...row]);
                redNewVisited[redY][redX] = true;
                blueNewVisited[blueY][blueX] = true;
                queue.push([redY, redX, blueY, blueX, turn + 1, redNewVisited, blueNewVisited]);
            }
        }
    }

    return result === Infinity? 0 : result;
}