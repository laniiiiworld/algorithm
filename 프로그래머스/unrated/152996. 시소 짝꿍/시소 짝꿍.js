function solution(weights) {
    const peoples = new Map();
    for(const weight of weights) {
        const count = peoples.get(weight) || 0;
        peoples.set(weight, count + 1);
    }
    const arr = [...peoples.keys()];
    const answer = Array(peoples.size).fill(0);
    const graph = arr.map(v => [v * 2, v * 3, v * 4]);
    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < 4; j++) {
            for(let k = i + 1; k < graph.length; k++) {
                if(!graph[k].includes(graph[i][j])) continue;
                answer[i] += peoples.get(arr[i]) * peoples.get(arr[k]);
            }
        }
    }
    for(let i = 0; i < arr.length; i++) {
        const count = peoples.get(arr[i]);
        if(count > 1) {
            answer[i] += count * (count - 1) / 2;
        }
    }
    
    return answer.reduce((acc, cur) => acc += cur, 0);
}