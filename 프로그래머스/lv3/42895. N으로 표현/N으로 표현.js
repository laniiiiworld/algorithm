function solution(N, number) {
    if(number === N) return 1;
    
    const dp = Array.from({length: 9}, (_, i) => new Set([parseInt(String(N).repeat(i) || '0')]));
    const addValues = (i, arr1, arr2) => {
        for(const value1 of arr1) {
            for(const value2 of arr2) {
                dp[i].add(value1 + value2);
                dp[i].add(value1 - value2);
                dp[i].add(value1 * value2);
                dp[i].add(Math.floor(value1 / value2));
            }
        }
    };
    
    for(let i = 2; i < dp.length; i++) {
        for(let j = 1; j < i; j++) {
            addValues(i, dp[i - j], dp[j]);
        }
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}