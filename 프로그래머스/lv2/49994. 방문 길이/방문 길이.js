function solution(dirs) {
    let [y, x] = [0, 0];
    const visited = new Set();
    const coordinates = {'U': [1, 0], 'D': [-1, 0], 'R': [0, -1], 'L': [0, 1]};
    
    for(let i = 0; i < dirs.length; i++) {
        const [plusY, plusX] = coordinates[dirs[i]];
        const nextY = y + plusY;
        const nextX = x + plusX;
        
        if(nextX < -5 || nextY < -5 || nextX > 5 || nextY > 5) continue;
        const checked = `${Math.min(y, nextY)}${Math.max(y, nextY)}${Math.min(x, nextX)}${Math.max(x, nextX)}`;
        if(!visited.has(checked)) {
            visited.add(checked);
        }
        
        [y, x] = [nextY, nextX];
    }
    
    return visited.size;
}