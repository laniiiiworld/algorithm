function solution(n, costs) {
    let answer = 0;
    const parents = Array.from({length: n}, (_, i) => i);

    const find = (x) => {
        if(parents[x] === x) return x;
        return parents[x] = find(parents[x]);
    };
    const union = (a, b) => {
        a = find(a);
        b = find(b);
        if(a < b) {
            parents[b] = a;
        } else {
            parents[a] = b;
        }
    };
    const compare = (a, b) => {
        a = find(a);
        b = find(b);
        return a === b;
    };

    costs.sort((a, b) => a[2] - b[2]);

    for(const [a, b, cost] of costs) {
        if(compare(a, b)) continue;
        answer += cost;
        union(a, b);
    }

    return answer;
}