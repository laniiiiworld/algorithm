function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    const goNextDungeons = (fatigue, count) => {
        answer = Math.max(count, answer);
        
        for(let i=0; i<dungeons.length; i++) {
            const [minimum, consumption] = dungeons[i];
            if(fatigue >= minimum && !visited[i]) {
                visited[i] = true;
                goNextDungeons(fatigue - consumption, count + 1);
                visited[i] = false;
            }
        }
    };
    
    goNextDungeons(k, 0);
    
    return answer;
}