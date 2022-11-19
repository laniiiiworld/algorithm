function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const queue = [[0, 0, 1]];
    
    while(queue.length) {
        const [row, col, count] = queue.shift();
        
        if(row === n && col === m) return count;
        if(!maps[row][col]) continue;
        
        maps[row][col] = 0;
        
        if(row+1 <= n) queue.push([row+1, col, count+1]);
        if(col+1 <= m) queue.push([row, col+1, count+1]);
        if(row-1 >= 0) queue.push([row-1, col, count+1]);
        if(col-1 >= 0) queue.push([row, col-1, count+1]);
    }
    
    return -1;
}