function solution(elements) {
    const base = [...elements, ...elements];
    const sums = new Set();
    
    const dp = new Array(base.length+1).fill(0);
    for(let i = 0; i < base.length; i++){
        dp[i + 1] += dp[i] + base[i];
    }
    
    sums.add(dp[dp.length - 1]);
    
    let count = 1;
    while(count < elements.length) {
        for(let i=0; i<elements.length; i++) {
            if(count + i >= dp.length) continue;
            sums.add(dp[count + i] - dp[i]);
        }
        count++;
    }
    
    return sums.size;
}