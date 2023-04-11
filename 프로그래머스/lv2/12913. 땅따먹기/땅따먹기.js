function solution(land) {
    for(let i = 1; i < land.length; i++) {
        const row = [0, 0, 0, 0];
        for(let j = 0; j < 4; j++) {
            for(let k = 0; k < 4; k++) {
                if(j === k) continue;
                row[j] = Math.max(row[j], land[i - 1][k] + land[i][j]);
            }
        }
        land[i] = row;
    }
    
    return Math.max(...land[land.length - 1]);
}