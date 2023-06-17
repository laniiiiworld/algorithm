function solution(scores) {
    const [wanhoX, wanhoY] = scores[0];
    const wanhoSum = wanhoX + wanhoY;
    
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    let maxY = 0;
    let answer = 1;
    
    for(const [x, y] of scores) {
        if(y < maxY) {
            if(x === wanhoX && y === wanhoY) return -1;
        } else {
            maxY = Math.max(maxY, y);
            if(x + y > wanhoSum) answer += 1;
        }
    }
    
    return answer;
}