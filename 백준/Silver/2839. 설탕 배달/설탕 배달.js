const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const getBagCount = (weight) => {
    let count = Math.floor(weight / 5);
    if(weight % 5 === 0) return count;
    
    let last = weight % 5;
    while(count && last % 3) {
        count -= 1;
        last += 5;
    }
    
    if(last % 3 === 0) return count + last / 3;
    if(weight % 3 === 0) return weight / 3;
    
    
    return -1;
};

console.log(getBagCount(n));