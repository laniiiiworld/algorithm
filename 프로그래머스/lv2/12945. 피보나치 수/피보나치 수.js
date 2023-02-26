function solution(n) {
    const dp = [0, 1, 1];
    let x = 2;
    while(x < n) {
        x += 1;
        dp[x] = (dp[x-1] + dp[x-2]) % 1234567;
    }
    return dp[x];
}