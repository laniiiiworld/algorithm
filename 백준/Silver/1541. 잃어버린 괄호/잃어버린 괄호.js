const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const group = input[0].split('-');
let answer = 0;

for(let i = 0; i < group.length; i++) {
    const num = group[i].split('+').map(Number)
                .reduce((acc, cur) => acc += cur, 0);
                
    if(i === 0) {
        answer += num;
    } else {
        answer -= num;
    }
}

console.log(answer);