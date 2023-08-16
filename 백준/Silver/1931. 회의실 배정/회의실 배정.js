const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const meetingList = input
                        .slice(1)
                        .map(item => item.split(' ').map(Number))
                        .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

const answer = [];
for(const [a, b] of meetingList) {
    if(answer.length && b < answer[answer.length - 1][1]) {
        while(answer.length && b < answer[answer.length - 1][1]) {
            answer.pop();
        }
        answer.push([a, b]);
        continue;
    }
    if(answer.length && a < answer[answer.length - 1][1]) continue;
    answer.push([a, b]);
}

console.log(answer.length);