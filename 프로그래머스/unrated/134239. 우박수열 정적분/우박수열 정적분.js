function solution(k, ranges) {
    let graph = [k];
    const area = [0];
    
    while(k > 1) {
        if(k % 2) {
            k = k * 3 + 1;
        } else {
            k = k / 2;
        }
        graph.push(k);
    }
    
    for(let i = 1; i < graph.length; i++) {
        const max = Math.max(graph[i - 1], graph[i]);
        const min = Math.min(graph[i - 1], graph[i]);
        area.push(area[i - 1] + (max - min) / 2 + min);
    }
    
    return ranges.map(([start, end]) => {
        if (area.length - 1 + end < start) return -1;
        return area.at(end - 1) - area[start];
    });
}