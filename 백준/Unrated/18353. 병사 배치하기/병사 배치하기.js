const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const lowerBound = (arr, target, start, end) => {
    while(start < end) {
        const mid = parseInt((start + end) / 2);
        if(arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
};

arr.reverse();

const d = [0];
for(const x of arr) {
    if(d[d.length - 1] < x) {
        d.push(x);
    } else {
        const index = lowerBound(d, x, 0, d.length);
        d[index] = x;
    }
}

console.log(n - (d.length - 1));