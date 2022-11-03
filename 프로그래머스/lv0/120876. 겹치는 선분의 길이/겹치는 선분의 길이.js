function solution(lines) {
    const dots = new Map();
    
    while(lines.length) {
        const line = lines.pop();
        let dot = line[0]+1;
        while(dot <= line[1]) {
            const count = dots.has(dot)? dots.get(dot) + 1 : 1;
            dots.set(dot, count);
            dot++;
        }
    }
    
    return [...dots].filter(item => item[1] > 1).length;
}