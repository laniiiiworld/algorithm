const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const meetingList = input
                        .slice(1)
                        .map(item => item.split(' ').map(Number))
                        .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

const answer = [];
for(const [a, b] of meetingList) {
    if(answer.length === 0) {
        answer.push([a, b]);
        continue;
    }
    const [start, end] = answer[answer.length - 1];
    if(a < end) continue;
    answer.push([a, b]);
}

console.log(answer.length);