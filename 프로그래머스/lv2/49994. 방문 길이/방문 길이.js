function solution(dirs) {
    const visited = [];
    const coordinate = [0, 0];
    
    const addDirection = (type, small, big, anotherValue) => {
        const isOldWay = visited.some(item => {
            return item.type === type 
                    && item.small === small 
                    && item.big === big 
                    && item.anotherValue === anotherValue;
        });
        
        if(isOldWay) return;
        
        visited.push({type, small, big, anotherValue});
    };
    
    dirs.split('').forEach(dir => {
        const [x, y] = coordinate;
        
        switch(dir) {
            case 'U':
                if(y === 5) break;
                coordinate[1]++;
                addDirection('Y', y, coordinate[1], x);
                break;
            case 'D':
                if(y === -5) break;
                coordinate[1]--;
                addDirection('Y', coordinate[1], y, x);
                break;
            case 'R':
                if(x === 5) break;
                coordinate[0]++;
                addDirection('X', x, coordinate[0], y);
                break;
            case 'L':
                if(x === -5) break;
                coordinate[0]--;
                addDirection('X', coordinate[0], x, y);
                break;
            default:
                break;
        }
    });
    
    return visited.length;
}