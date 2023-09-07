function solution(k, dungeons) {
    let answer = 0;
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    const dfs = (hp, count) => {
        answer = Math.max(answer, count);
        
        for(let i = 0; i < n; i++) {
            const [neededHp, useupHp] = dungeons[i];
            if(visited[i] || hp < neededHp) continue;
            
            visited[i] = true;
            dfs(hp - useupHp, count + 1);
            visited[i] = false;
        }
    };
    
    dfs(k, 0);
    
    return answer;
}