function solution(dirs) {
    const directions = {'U': [1, 0], 'D': [-1, 0], 'L': [0, -1], 'R': [0, 1]};
    const visited = new Set();
    const dfs = (x, y, index) => {
        if(index === dirs.length) return;
        
        const [plusY, plusX] = directions[dirs[index]];
        let nextX = x + plusX;
        let nextY = y + plusY;
        if(nextX < -5 || nextX > 5) {
            nextX = x;
        }else if(nextY < -5 || nextY > 5) {
            nextY = y;
        } else {
            visited.add(`${Math.min(x, nextX)} ${Math.min(y, nextY)} ${Math.max(x, nextX)} ${Math.max(y, nextY)}`);
        }
        
        dfs(nextX, nextY, index + 1);
    };
    
    dfs(0, 0, 0);
    
    return visited.size;
}