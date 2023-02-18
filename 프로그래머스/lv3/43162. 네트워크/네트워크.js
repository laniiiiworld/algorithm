function solution(n, computers) {
    let answer = 1; //network 개수
    const links = new Map(); //key와 연결된 컴퓨터들을 저장한 정보
    const visited = Array(n).fill(false); //index번째 컴퓨터 방문여부를 저장한 정보
    
    for(let i=0; i<computers.length; i++) {
        for(let j=0; j<computers[0].length; j++) {
            if(computers[i][j] === 0 || i === j) continue;
            if(!links.has(i)) links.set(i, []);
            links.set(i, [...links.get(i), j]);
        }
    }
    
    const queue = [0];
    while(visited.includes(false)) {
        let current = null;
        if(queue.length) {
            current = queue.shift();
        } else {
            answer += 1;
            current = visited.findIndex(value => value === false);
        }
        visited[current] = true;
        const nodes = links.get(current) || [];
        for(const node of nodes) {
            if(visited[node]) continue;
            queue.push(node);
        }
    }
    
    return answer;
}