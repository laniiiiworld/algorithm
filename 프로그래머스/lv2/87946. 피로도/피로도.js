function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    const dfs = (hp, count) => {
        answer = Math.max(answer, count);
        
        for(let i = 0; i < dungeons.length; i++) {
            const [minHp, usedHp] = dungeons[i];
            if(visited[i]) continue;
            if(hp < minHp || hp - usedHp < 0) continue;
            visited[i] = true;
            dfs(hp - usedHp, count + 1);
            visited[i] = false;
        }
    };
    
    dfs(k, 0);
    
    return answer;
}