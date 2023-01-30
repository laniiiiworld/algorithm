function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    const dfs = (count, hp) => {
        answer = Math.max(answer, count);
        
        for(let i=0; i<dungeons.length; i++) {
            if(visited[i] || hp < dungeons[i][0]) continue;
            visited[i] = true;
            dfs(count + 1, hp - dungeons[i][1]);
            visited[i] = false;
        }
    };
    
    dfs(0, k);
    
    return answer;
}