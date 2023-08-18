const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [length, width, height] = input[0].split(' ').map(Number);
const n = Number(input[1]);
const cubes = Array(20).fill(0);
const getNearest = (x) => {
    let i = 1;
    while((2**i) <= x) i += 1;
    return i - 1;
};

input.slice(2).forEach(item => {
   const [i, count] = item.split(' ').map(Number);
   cubes[i] = count;
});

const minSize = getNearest(Math.min(length, width, height));
let answer = 0;
let used = 0;

for(let i = minSize; i >= 0; i--) {
    used *= 8;
    const current = Math.pow(2, i);
    const required = Math.floor(length / current)
                    * Math.floor(width / current) 
                    * Math.floor(height / current) 
                    - used;
    const usage = Math.min(required, cubes[i]);
    used += usage;
    answer += usage;
}

console.log(used === (length * width * height)? answer : -1);