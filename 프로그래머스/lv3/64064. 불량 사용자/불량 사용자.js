function solution(user_id, banned_id) {
    let answer = new Set();
    const ids = [];
    const bannedList = [];
    const dfs = (index) => {
        if(index === ids.length) {
            answer.add(bannedList.sort().join(''));
            return;
        }
        for(let i=0; i<ids[index].length; i++) {
            if(bannedList.includes(ids[index][i])) continue;
            bannedList.push(ids[index][i]);
            dfs(index+1);
            bannedList.splice(bannedList.indexOf(ids[index][i]), 1);
        }
    };
    
    while(banned_id.length) {
        let bannedId = banned_id.pop().replaceAll('*','.');
        const regexp = new RegExp(`^${bannedId}$`);
        const arr = user_id.filter(id => regexp.test(id)).sort();
        ids.push(arr);
    }
    
    dfs(0);
    
    return answer.size;
}