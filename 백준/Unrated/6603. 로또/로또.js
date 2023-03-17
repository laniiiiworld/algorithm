const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const combine = (arr, count) => {
    if(count === 1) return arr;
    const result = [];
    
    arr.forEach((fixed, index) => {
        const rest = arr.slice(index + 1);
        const combinations = combine(rest, count - 1);
        result.push(...combinations.map(items => `${fixed} ${items}`));
    });
    
    return result;
};

let line = 0;
while(input[line] !== '0') {
    const arr = input[line].split(' ');
    const k = arr[0];
    const numbers = arr.slice(1);
    console.log(combine(numbers, 6).join('\n'));
    console.log();
    line += 1;
}