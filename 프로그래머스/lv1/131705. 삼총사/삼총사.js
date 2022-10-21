function solution(number) {
    const visited = Array(number.length).fill(false);
    let count = 0;
    const dfs = (k, sum) => {
        if(k === 0) {
            count += (sum === 0)? 1 : 0;
            return;
        }
        for(let i=0; i<number.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(k-1, sum + number[i]);
            visited[i] = false;
        }
    };
    dfs(3, 0);
    return count/6;
}