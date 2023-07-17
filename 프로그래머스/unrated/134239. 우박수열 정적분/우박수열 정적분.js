function solution(k, ranges) {
    const numbers = [k];
    while(k > 1) {
        if(k % 2) {
            k = k * 3 + 1;
        } else {
            k /= 2;
        }
        numbers.push(k);
    }
    
    const graph = Array(numbers.length).fill(0);
    for(let i = 1; i < graph.length; i++) {
        const min = Math.min(numbers[i - 1], numbers[i]);
        const max = Math.max(numbers[i - 1], numbers[i]);
        graph[i] = min + (max - min) / 2 + graph[i - 1];
    }
    
    return ranges.map(range => {
        let [start, end] = range;
        if(start === 0 && end === 0) return graph[graph.length - 1];
        end = (end > 0)? end - 1 : graph.length + end - 1;
        if(start > end) return -1;
        return graph.at(end) - graph.at(start);
    });
}