function solution(dots) {
    const visited = new Array(dots.length).fill(false);
    
    const slopeOfLine = (dot1, dot2) => {
        return Math.abs(dot1[1]-dot2[1]) / Math.abs(dot1[0]-dot2[0]);
    };
    
    const getSlope = (value) => {
        const dot1 = dots[visited.indexOf(value)];
        const dot2 = dots[visited.lastIndexOf(value)];
        return slopeOfLine(dot1, dot2);
    };
    
    visited[0] = true;
    for(let i=1; i<dots.length; i++) {
        visited[i] = true;
        if(getSlope(true) === getSlope(false)) return 1;
        visited[i] = false;
    }
    
    return 0;
}