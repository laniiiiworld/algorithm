function solution(n) {
    let answer = 0;
    let start = 1;
    let end = 1;
    let sum = 0;
    
    while(start <= n) {
        while(end <= n && sum < n) {
            sum += end++;
        }
        
        if(sum === n) answer++;
        
        sum -= start++;
    }
    
    return answer;
}