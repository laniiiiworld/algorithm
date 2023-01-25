let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  return input.split(' ').filter(v => v).length;
}

console.log(solution(input));
