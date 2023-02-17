function solution(n, wires) {
    let answer = Infinity;
    const makeNewNetwork = (wires) => {
        let tower = 0;
        
        const visited = Array(n+1).fill(false);
        const gragh = Array.from({length:n+1}, () => []);
        for(const [start, end] of wires) {
            gragh[start].push(end);
            gragh[end].push(start);
        }
        
        const queue = [wires[0][0]];
        while(queue.length) {
            const current = queue.shift();
            visited[current] = true;
            tower += 1;
            for(const node of gragh[current]) {
                if(visited[node]) continue;
                queue.push(node);
            }
        }
        
        return tower;
    };
    
    for(let i=0; i<wires.length; i++) {
        const newWires = [...wires.slice(0, i), ...wires.slice(i+1)];
        const count = makeNewNetwork(newWires);
        answer = Math.min(answer, Math.abs(n - count * 2));
    }
    
    return answer;
}