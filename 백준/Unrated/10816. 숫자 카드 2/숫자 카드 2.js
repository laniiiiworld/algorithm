const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
const m = Number(input[2]);
const numbers = input[3].split(' ').map(Number);

const lowerBound = (arr, target, start, end) => {
    while(start < end) {
        const mid = parseInt((start + end) / 2);
        if(arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
};

const upperBound = (arr, target, start, end) => {
    while(start < end) {
        const mid = parseInt((start + end) / 2);
        if(arr[mid] > target) end = mid;
        else start = mid +1;
    }
    return end;
};

const countByRange = (arr, value) => {
    const rightIndex = upperBound(arr, value, 0, n);
    const leftIndex = lowerBound(arr, value, 0, n);
    return rightIndex - leftIndex;
};

console.log(numbers.map(v => countByRange(cards, v)).join(' '));