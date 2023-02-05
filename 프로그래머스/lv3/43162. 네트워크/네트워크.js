function solution(n, computers) {
    let count = 0;
    const visited = new Array(n).fill(false);
    const newNetwork = (computer) => {
        const stack = [computer];
        while(stack.length) {
            const i = stack.pop();
            visited[i] = true;
            for(let j=0; j<n; j++) {
                if(!computers[i][j] || visited[j]) continue;
                stack.push(j);
            }
        }
        return 1;
    };
    
    for(let computer=0; computer<n; computer++) {
        if(visited[computer]) continue;
        count += newNetwork(computer);
    }
    
    return count;
}