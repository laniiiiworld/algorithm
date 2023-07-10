function solution(dirs) {
    let [nowX, nowY] = [0, 0];
    const visited = new Set();
    const canBeMoved = (x, y) => x >= -5 && x <= 5 && y >= -5 && y <= 5;
    const moveDirection = (direction) => {
        let nextX = nowX;
        let nextY = nowY;
        
        if(direction === 'U') {
            nextY += 1;
        } else if(direction === 'D') {
            nextY -= 1;
        } else if(direction === 'R') {
            nextX += 1;
        } else if(direction === 'L') {
            nextX -= 1;
        }
        
        if(!canBeMoved(nextX, nextY)) return [nowX, nowY];
        return [nextX, nextY];
    };
    
    for(let i = 0; i < dirs.length; i++) {
        const [nextX, nextY] = moveDirection(dirs[i], nowX, nowY);
        
        if(nextX === nowX && nextY === nowY) continue;
        visited.add(`${(nowX + nextX) / 2}${(nowY + nextY) / 2}`);
        
        nowX = nextX;
        nowY = nextY;
    }
    
    return visited.size;
}