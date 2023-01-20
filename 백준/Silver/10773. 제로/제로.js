let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(arr) {
  const K = arr.shift();
  const stack = [];

  arr.forEach((value) => {
    if (value === '0') {
      stack.pop();
    } else {
      stack.push(Number(value));
    }
  });

  return stack.reduce((sum, cur) => (sum += cur), 0);
}

console.log(solution(input));