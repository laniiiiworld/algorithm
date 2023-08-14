const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const getCount = (a, b) => {
    let count = 0;
    
    while(a < b) {
        if(b % 2 === 0) {
            b /= 2;
        } else if(b % 10 === 1) {
            b = Math.floor(b / 10);
        } else {
            return -1;
        }
        count += 1;
    }
    
    return (a === b)? count + 1 : -1;
};

console.log(getCount(a, b));