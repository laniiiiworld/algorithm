function solution(n, wires) {
    let answer = n;
    const getNewTowerCount = (splicedWires) => {
        let count = 1;
        const distance = new Array(n+1).fill(0);
        const gragh = Array.from({length: n+1}, () => []);
        
        for(const [start, end] of splicedWires) {
            gragh[start].push(end);
            gragh[end].push(start);
        }
        
        const queue = [1];
        distance[1] = 1;
        while(queue.length) {
            const start = queue.shift();
            for(const end of gragh[start]) {
                if(distance[end] > 0) continue;
                distance[end] = distance[start] + 1;
                queue.push(end);
                count += 1;
            }
        }
        
        return count;
    };
    
    for(let i=0; i<wires.length; i++) {
        const splicedWires = [...wires.slice(0, i), ...wires.slice(i+1)];
        const count = getNewTowerCount(splicedWires);
        answer = Math.min(answer, Math.abs(count - (n - count)));
    }
    
    return answer;
}