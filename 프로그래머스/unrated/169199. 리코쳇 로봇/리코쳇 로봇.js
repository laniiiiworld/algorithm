function solution(board) {
  let start, goal;

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'R') start = [x, y];
      if (board[x][y] === 'G') goal = [x, y];
    }
  }

  const queue = [[0, ...start]];
  const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
  visited[start[0]][start[1]] = true;

  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    const [count, x, y] = queue.shift();
    if (x === goal[0] && y === goal[1]) return count;

    for (const [dx, dy] of move) {
      let temp = [x, y];
      while (true) {
        const [nx, ny] = [temp[0] + dx, temp[1] + dy];
        if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length) break;
        if (board[nx][ny] === 'D') break;

        temp = [nx, ny];
      }
      if (visited[temp[0]][temp[1]]) continue;
      visited[temp[0]][temp[1]] = true;

      queue.push([count + 1, ...temp]);
    }
  }
  return -1;
}