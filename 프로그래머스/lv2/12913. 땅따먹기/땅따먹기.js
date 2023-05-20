function solution(land) {
    for(let i = 1; i < land.length; i++) {
        const [a, b, c, d] = land[i - 1];
        
        land[i][0] += Math.max(b, c, d);
        land[i][1] += Math.max(a, c, d);
        land[i][2] += Math.max(a, b, d);
        land[i][3] += Math.max(a, b, c);
    }
    
    return Math.max(...land[land.length - 1]);
}