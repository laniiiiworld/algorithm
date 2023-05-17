function solution(n) {
    const answer = [];
    const dfs = (n, start, to, mid) => {
        if(n == 1){
            answer.push([start, to]);
            return;
        }
        dfs(n-1, start, mid, to); //1번 기둥의 n-1개를 2번을 거쳐 3번 -> 2번으로 이동
        answer.push([start, to]); //n을 1번 -> 3번으로 이동
        dfs(n-1, mid, to, start); //2번의 기둥의 n-1개를 1번을 거쳐 2번 -> 3번으로 이동
    };
    
    dfs(n, 1, 3, 2);
    
    return answer;
}