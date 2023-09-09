function solution(user_id, banned_id) {
    const answer = new Set();
    const banned = banned_id.map(v => {
        const value = v.replaceAll('*', '.');
        const regexp = new RegExp(`^${value}$`);
        return user_id.filter(v => regexp.test(v));
    });
    const visited = Array(user_id.length).fill(false);
    const dfs = (now, list) => {
        if(now === banned.length) {
            answer.add(list.sort().join(' '));
            return;
        }
        for(const id of banned[now]) {
            const index = user_id.indexOf(id);
            if(visited[index]) continue;
            visited[index] = true;
            dfs(now + 1, [...list, id]);
            visited[index] = false;
        }
    };
    
    dfs(0, []);
    
    return answer.size;
}