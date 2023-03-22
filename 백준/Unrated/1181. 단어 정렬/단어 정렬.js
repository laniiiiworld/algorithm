const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const strings = [...new Set(input.slice(1))];
strings.sort((a, b) => {
    if(a.length !== b.length) return a.length - b.length;
    if(a === b) return 0;
    return a < b? -1 : 1;
});
console.log(strings.join('\n'));