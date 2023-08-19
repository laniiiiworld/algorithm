function solution(scores) {
    const [wanhoA, wanhoB] = scores[0];
    let ranks = 1;
    let max = 0;
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    for(const [a, b] of scores) {
        if(b < max) {
            if(a === wanhoA && b === wanhoB) return -1;
        } else {
            if(a + b > wanhoA + wanhoB) ranks += 1;
            max = Math.max(max, b);
        }
    }
    
    return ranks;
}