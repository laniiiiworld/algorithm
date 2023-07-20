function solution(user_id, banned_id) {
    const answer = new Set();
    const users = user_id.map((v, i) => [v, i]);
    const banned = banned_id.map(v => {
        const value = v.replaceAll('*', '.');
        return users.filter(v => {
            const regexp = new RegExp(`^${value}$`);
            return regexp.test(v[0]);
        });
    });
    const n = user_id.length;
    const visited = Array(n).fill(false);
    const dfs = (depth, result) => {
        if(depth === banned.length) {
            answer.add(result.sort((a, b) => a - b).join(' '));
            return;
        }
        
        const ids = banned[depth];
        for(const [id, index] of ids) {
            if(visited[index]) continue;
            visited[index] = true;
            dfs(depth + 1, [...result, index]);
            visited[index] = false;
        }
    };
    
    dfs(0, []);
    
    return answer.size;
}