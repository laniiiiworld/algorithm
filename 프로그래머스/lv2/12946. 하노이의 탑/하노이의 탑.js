function solution(n) {
    const answer = [];
    const dfs = (n, start, mid, to) => {
        if(n == 1){
            answer.push([start, to]);
            return;
        }
        dfs(n - 1, start, to, mid);
        answer.push([start, to]);
        dfs(n-1, mid, start, to);
    };
    
    dfs(n, 1, 2, 3);
    
    return answer;
}