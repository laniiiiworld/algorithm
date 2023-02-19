function solution(n, costs) {
    let answer = 0;
    const parents = Array.from({length: n}, (_,i) => i);
    const find = (x) => {
        if(parents[x] === x) return x;
        return parents[x] = find(parents[x]);
    };
    const union = (a, b) => {
        const parentA = find(a);
        const parentB = find(b);
        if(parentA < parentB) {
            parents[parentB] = parentA;
        } else {
            parents[parentA] = parentB;
        }
    };
    const compare = (a, b) => {
        return find(a) === find(b);
    };
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const [a, b, cost] of costs) {
        if(compare(a, b)) continue;
        answer += cost;
        union(a, b);
    }
    
    return answer;
}