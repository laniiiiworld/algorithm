function solution(dirs) {
    const canMove = (y, x) => y >= -5 && y <= 5 && x >= -5 && x <= 5;
    const directions = {
                        U: [-1, 0],
                        D: [1, 0],
                        R: [0, 1],
                        L: [0, -1]
                       };
    const visited = new Set();
    let [nowY, nowX] = [0, 0];
    
    for(let i = 0; i < dirs.length; i++) {
        const [plusY, plusX] = directions[dirs[i]];
        const nextY = nowY + plusY;
        const nextX = nowX + plusX;
        if(!canMove(nextY, nextX)) continue;
        const visitedY = nowY < nextY? `${nowY}${nextY}` : `${nextY}${nowY}`;
        const visitedX = nowX < nextX? `${nowX}${nextX}` : `${nextX}${nowX}`;
        visited.add(`${visitedY}${visitedX}`);
        nowY = nextY;
        nowX = nextX;
    }
    
    return visited.size;
}