let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(input) {
  input.shift();
  input.pop();
  const nums = input.map((item) => item.split(' ')).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const answer = nums.map(([x, y]) => `${x} ${y}`).join('\n');
  console.log(answer);
}

solution(input);