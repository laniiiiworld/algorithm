const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map(Number);
const graph = input[1].split(' ').map(Number);
let end = 0;
let now = 0;
for(end = 0; end < x; end++) {
    now += graph[end];
}
let max = now;
let count = 1;
for(let i = x; i < n; i++) {
    now += graph[i];
    now -= graph[i - x];
    if(now === max) {
        count += 1;
    } else if(now > max) {
        max = now;
        count = 1;
    }
}

if(max === 0) {
    console.log('SAD');
} else {
    console.log(max);
    console.log(count);
}