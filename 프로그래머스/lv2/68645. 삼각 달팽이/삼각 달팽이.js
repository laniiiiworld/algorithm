function solution(n) {
    const target = n * (n + 1) / 2;
    const graph = Array.from({length: n}, (_, i) => Array(i + 1).fill(0));
    const fillLeft = (value, row, col) => {
        while(row < n) {
            if(graph[row][col]) return [value, --row, ++col];
            graph[row++][col] = value++;
        }
        
        return [value, --row, ++col];
    };
    const fillBottom = (value, row, col) => {
        while(col < n) {
            if(graph[row][col]) return [value, --row, col - 2];
            graph[row][col++] = value++;
        }
        
        return [value, --row, col - 2];
    };
    const fillRight = (value, row, col) => {
        while(row > 0 && col >= 0) {
            if(graph[row][col]) return [value, row + 2, ++col];
            graph[row--][col--] = value++;
        }
        
        return [value, row + 2, ++col];
    };
    
    let [value, row, col] = [1, 0, 0];
    while(value <= target) {
        [value, row, col] = fillLeft(value, row, col);
        [value, row, col] = fillBottom(value, row, col);
        [value, row, col] = fillRight(value, row, col);
    }
    
    return graph.flat();
}