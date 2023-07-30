function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); //비용이 적은 순서대로 정렬
    
  const costsVisited = new Array(costs.length).fill(false); //costs[i] 확인 여부
  const visited = new Array(n).fill(false); //노드 방문 여부
    
  //가장 비용이 적은 곳부터 방문 처리
  const [a, b, c] = costs[0];
  visited[a] = true;
  visited[b] = true;
  costsVisited[0] = true;

  let totalCost = c; //모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용

  //모든 노드가 연결되는 시점까지 확인
  while (visited.includes(false)) {
    for (let i = 1; i < costs.length; i++) {
      if (costsVisited[i]) continue; //확인되지 않은 costs[i]만 다리 연결 가능여부 확인
      const [start, end, cost] = costs[i];
      //다리를 연결할 수 있는 경우(= 둘 중 한 노드가 아직 방문처리 되지 않은 경우)
      if ((!visited[start] && visited[end]) || (visited[start] && !visited[end])) {
        //노드 방문 처리
        visited[start] = true;
        visited[end] = true;
        //비용 추가
        totalCost += cost;
        //costs[i] 확인 처리
        costsVisited[i] = true;
        break;
      }
    }
  }

  return totalCost;
}