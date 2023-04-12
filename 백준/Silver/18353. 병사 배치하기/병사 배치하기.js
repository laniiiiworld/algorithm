const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const getLeftIndex = (arr, target, start, end) => {
    while(start < end) {
        const mid = Math.floor((start + end) / 2);
        if(arr[mid] <= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
};

const answer = [Infinity];
for(const value of arr) {
    if(answer[answer.length - 1] > value) {
        answer.push(value);
    } else {
        const leftIndex = getLeftIndex(answer, value, 0, answer.length);
        answer[leftIndex] = value;
    }
}

console.log(n - (answer.length - 1));