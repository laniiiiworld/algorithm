const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const sums = [0];
for(let i = 0; i < n; i++) {
    sums.push(sums[i] + numbers[i]);
}

if(sums[n] < s) {
    console.log(0);
} else {
    let sum = 0;
    let start = 0;
    let end = 0;
    let length = n;
    
    while(start <= end && end <= n) {
        if(numbers[end] >= s) {
            length = 1;
            break;
        }
        if(sum >= s) {
            sum -= numbers[start++];
        } else {
            sum += numbers[end++];
        }
        
        if(sum >= s) length = Math.min(length, end - start);
    }
    
    console.log(length);
}