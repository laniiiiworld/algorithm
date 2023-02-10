function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    let answer = 0;
    const visitedCosts = new Array(costs.length).fill(false);
    const visited = new Array(n).fill(false);
    visitedCosts[0] = true;
    visited[costs[0][0]] = true;
    visited[costs[0][1]] = true;
    answer += costs[0][2];
    
    while(visited.includes(false)) {
        for(let i=0; i<costs.length; i++) {
            if(visitedCosts[i]) continue;
            const [start, end, cost] = costs[i];
            if((visited[start] && visited[end]) || (!visited[start] && !visited[end])) {
                continue;
            }
            visitedCosts[i] = true;
            //비용처리
            visited[start] = true;
            visited[end] = true;
            answer += cost;
            break;
        }
    }
    
    return answer;
}