function solution(friends, gifts) {
    const n = friends.length;
    const graph = Array.from({length: n}, () => {
        return Array.from({length: n}, () => ({count: 0, index: 0}));
    });
    
    for(const str of gifts) {
        const [a, b] = str.split(' ');
        const indexA = friends.indexOf(a);
        const indexB = friends.indexOf(b);
        graph[indexA][indexB].count += 1;
        graph[indexA][indexA].index += 1;
        graph[indexB][indexB].index -= 1;
    }
    
    const result = Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i === j) continue;
            const isNone = !graph[i][j].count && !graph[j][i].count;
            const isSame = !isNone && graph[i][j].count === graph[j][i].count;
            if(!isNone && graph[i][j].count < graph[j][i].count) continue;
            if((isNone || isSame) && graph[i][i].index <= graph[j][j].index) continue;
            result[i] += 1;
        }
    }
    
    return Math.max(...result);
}