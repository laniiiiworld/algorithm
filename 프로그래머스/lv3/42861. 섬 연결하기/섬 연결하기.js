// 크루스칼 알고리즘 : 두 정점이 같은 집합에 속하는지 확인
// Union-Find 알고리즘 : 각 원소가 같은 집합인지 확인
function solution(n, costs) {
    let answer = 0;
    const parents = Array.from({length: n}, (_, i) => i);
    
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
        const parentA = find(a);
        const parentB = find(b);
        return parentA === parentB;
    };
    
    costs.sort((a, b) => a[2] - b[2]); // 탐욕적으로 가중치가 낮은 간선부터 선택
    
    for(const [a, b, cost] of costs) {
        if(compare(a, b)) continue;
        answer += cost;
        union(a, b);
    }
    
    return answer;
}