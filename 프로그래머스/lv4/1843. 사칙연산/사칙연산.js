function solution (arr) {
    const n = Math.ceil(arr.length / 2); //숫자의 개수
    const max_dp = Array.from({length: n}, () => Array(n).fill(-Infinity));
    const min_dp = Array.from({length: n}, () => Array(n).fill(Infinity));
    
    //피연산자들 입력
    for(let i = 0; i < n; i++) {
        max_dp[i][i] = Number(arr[i * 2]);
        min_dp[i][i] = Number(arr[i * 2]);
    }
    
    for(let step = 1; step < n; step++) { //i와 j의 간격
        for(let i = 0; i < n - step; i++) {
            const j = i + step;
            //i ~ j 사이에서 일정 간격(step)을 두고 이동하며 i ~ k, k ~ j까지 나누어 계산했을 때 최댓값, 최솟값을 갱신
            for(let k = i; k < j; k++) {
                if (arr[k * 2 + 1] === '+') { //k번째 연산자가 '+'인 경우
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] + max_dp[k+1][j]);
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] + min_dp[k+1][j]);
                } else { //k번째 연산자가 '-'인 경우
                    //i ~ j 최댓값 : i ~ k 최댓값 -  k ~ j 최솟값
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] - min_dp[k+1][j]);
                    //i ~ j 최솟값 : i ~ k 최솟값 -  k ~ j 최댓값
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] - max_dp[k+1][j]);
                }
            }
        }
    }
    
    return max_dp[0][n - 1];
}