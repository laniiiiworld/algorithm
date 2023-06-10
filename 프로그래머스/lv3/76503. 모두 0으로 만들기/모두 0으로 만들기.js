function solution(a, edges) {
    const n = a.length;
    const graph = Array.from({length : n}, () => []);
    const visited = Array(n).fill(false);
    const dfs = (start) => {
        let result = BigInt(0);
        const stack = [[start, null]];
        
        while (stack.length) {
            const [current, parent] = stack.pop();

            if (visited[current]) {
                result += BigInt(Math.abs(a[current]));
                a[parent] += a[current];
                continue;
            }

            visited[current] = true;
            stack.push([current, parent]);

            for (const child of graph[current]) {
                if (visited[child]) continue;
                stack.push([child, current]);
            }
        }
        
        return a[0]? -1 : result;
    };
    
    for(const [start, end] of edges) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    return dfs(0);
}