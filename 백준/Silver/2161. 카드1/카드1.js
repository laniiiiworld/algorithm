let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(num) {
  const answer = [];
  const arr = Array.from({ length: num }, (_, i) => (i + 1));
  let isMoved = false;
  
  while (arr.length) {
    const firstEl = arr.shift();
    if (isMoved) {
      arr.push(firstEl);
    } else {
      answer.push(firstEl);
    }
    isMoved = !isMoved;
  }
  return answer.join(' ');
}

console.log(solution(Number(input)));