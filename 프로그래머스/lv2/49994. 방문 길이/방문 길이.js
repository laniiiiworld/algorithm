function solution(dirs) {
    const visited = new Set();
    let [beforeX, beforeY] = [0, 0];
    
    for(let i=0; i<dirs.length; i++) {
        const command = dirs.charAt(i);
        let [x, y] = [beforeX, beforeY];
        
        if(command === 'L' && x-1 >= -5) {
            x -= 1;
        } else if(command === 'R' && x+1 <= 5) {
            x += 1;
        } else if(command === 'U' && y+1 <= 5) {
            y += 1;
        } else if(command === 'D' && y-1 >= -5) {
            y -= 1;
        } else {
            continue;
        }
        
        const arr = [[beforeX, beforeY], [x, y]]
                        .sort((a, b) => a[0] - b[0] || a[1] - b[1])
                        .map(item => `${item[0]}${item[1]}`)
                        .join('');
        
        visited.add(arr);
        
        [beforeX, beforeY] = [x, y];
    }
    
    return visited.size;
}