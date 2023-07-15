function solution(storey) {
    let answer = Infinity;
    const queue = [[storey, 0]];
    
    while(queue.length) {
        const [now, count] = queue.shift();
        const rest = now % 10;
        const next = Math.floor(now / 10);
        
        if(next > 0) {
            queue.push([next + 1, count - rest + 10]);
            queue.push([next, count + rest]);
        } else {
            answer = Math.min(answer, count + rest, count - rest + 10 + 1);
        }
    }
    
    return answer;
}