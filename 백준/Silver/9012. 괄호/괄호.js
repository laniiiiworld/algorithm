let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let answer = 0;
    for (let j = 0; j < arr[i].length; j++) {
      answer += arr[i][j] === '(' ? 1 : -1;
      if (answer < 0) break;
    }
    console.log(answer ? 'NO' : 'YES');
  }
}

solution(input);
