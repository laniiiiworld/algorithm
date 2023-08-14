const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let testCase = Number(input[0]);
const getCount = (n, ranks) => {
    let count = 0;
    
    ranks.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    let minInterview = ranks[0][1];
    for(const [paper, interview] of ranks) {
        if(interview > minInterview) {
            continue;
        }
        minInterview = Math.min(minInterview, interview);
        count += 1;
    }
    
    return count;
};

const answer = [];
let line = 1;
while(testCase--) {
    const n = Number(input[line++]);
    const ranks = input
                    .slice(line, line + n)
                    .map(item => item.split(' ').map(Number));
    answer.push(getCount(n, ranks));
    line += n;
}

console.log(answer.join('\n'));