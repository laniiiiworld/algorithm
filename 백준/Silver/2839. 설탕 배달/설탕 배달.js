const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const getBagCount = (weight) => {
    let count = 0;

    while(weight > 0) {
        if(weight % 5 === 0) {
            return count + weight / 5;
        }
        weight -= 3;
        count += 1;
    }
    
    return (weight === 0)? count : -1;
};

console.log(getBagCount(n));