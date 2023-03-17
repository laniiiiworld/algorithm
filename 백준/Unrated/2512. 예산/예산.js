const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const total = Number(input[2]);

const getMaximumPrice = (arr, total) => {
    let sum = arr.reduce((sum, cur) => sum += cur, 0);
    let start = 0;
    let end = total;
    
    if(sum <= total) return Math.max(...arr);
    
    while(start <= end) {
        const mid = parseInt((start + end) / 2);
        sum = arr.reduce((sum, cur) => sum += (mid < cur)? mid : cur, 0);
        
        if(sum === total) return mid;
        else if(sum > total) end = mid - 1;
        else start = mid + 1;
    }
    
    return end;
};

console.log(getMaximumPrice(arr, total));