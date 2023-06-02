function solution(sequence) {
    if(sequence.length === 1) return Math.abs(sequence[0]);
    
    const n = sequence.length;
    const dp = Array(n).fill(0);
    
    dp[0] = sequence[0] * 1;
    
    let a = -1;
    let [maxABS, max, min] = [Math.abs(dp[0]), dp[0], dp[0]];
    
    for(let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + sequence[i] * a;
        a *= -1;
        
        maxABS = (maxABS < Math.abs(dp[i]))? Math.abs(dp[i]) : maxABS;
        max = (max < dp[i])? dp[i] : max;
        min = (min > dp[i])? dp[i] : min;
    }
    
    return Math.max(maxABS, max - min);
}