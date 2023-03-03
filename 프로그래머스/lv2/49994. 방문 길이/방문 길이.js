function solution(dirs) {
    const commands = {
                    'L': [-1, 0],
                    'R': [1, 0],
                    'U': [0, 1],
                    'D': [0, -1]
                  };
    const visited = new Set();
    let [beforeX, beforeY] = [0, 0];
    
    for(let i=0; i<dirs.length; i++) {
        const command = dirs.charAt(i);
        let [x, y] = [beforeX + commands[command][0], beforeY + commands[command][1]];
        
        if(x < -5 || y < -5 || x > 5 || y > 5) {
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