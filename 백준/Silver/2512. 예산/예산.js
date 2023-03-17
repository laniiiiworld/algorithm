const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const total = Number(input[2]);

const getMaximumPrice = (arr, total) => {
    let sum = arr.reduce((sum, cur) => sum += cur, 0);
    let start = 0;
    let end = Math.max(...arr);
    
    if(sum <= total) return end;
    
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