function solution(n, computers) {
    let count = 0;
    const visited = Array(n).fill(false);
    const newNetwork = (computer) => {
        const stack = [computer]; //연결된 컴퓨터가 있는지 확인해야 할 리스트
        while(stack.length) {
            const now = stack.pop();
            for(let j=0; j<n; j++) {
                if(!computers[now][j] || visited[j]) continue;
                visited[j] = true; //연결되어있고, 방문한적 없는 컴퓨터 방문 처리
                stack.push(j);
            }
        }
        return 1;
    };
    
    for(let i=0; i<n; i++) {
        if(visited[i]) continue;
        count += newNetwork(i);
    }
    
    return count;
}