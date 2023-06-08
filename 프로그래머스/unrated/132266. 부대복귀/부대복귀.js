function solution(n, roads, sources, destination) {
  // 그래프 초기화
  const graph = new Map();
  roads.forEach(([prev, next]) => {
    graph.set(prev, graph.has(prev) ? graph.get(prev).concat([next]) : [next]);
    graph.set(next, graph.has(next) ? graph.get(next).concat([prev]) : [prev]);
  });
  // dp 초기화
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[destination] = 0;
  // 방문 배열 초기화
  const visited = new Array(n + 1).fill(false);
  visited[0] = true;
  // queue 초기화
  const queue = [[destination, 0]];
  // shift 사용시 시간초과 ㅜㅜ js라 서럽다
  let queueIdx = 0;
  // 다익스트라 알고리즘으로 최단 경로 도출
  while (queue.length !== queueIdx) {
    const [prev, dist] = queue[queueIdx];
    queueIdx++;
    if (visited[prev]) continue;
    visited[prev] = true;
    const nexts = graph.get(prev);

    for (const next of nexts) {
      dp[next] = Math.min(dp[next], dist + 1);
      if (!graph.has(next)) continue;
      queue.push([next, dp[next]]);
    }
  }
  return sources.map((source) => (dp[source] === Infinity ? -1 : dp[source]));
}