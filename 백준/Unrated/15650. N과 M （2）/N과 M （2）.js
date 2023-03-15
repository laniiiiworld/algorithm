const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const answer = [];
const numbers = Array.from({length: n}, (_, i) => i+1);
const combine = (arr, count) => {
    if(count === 1) return arr.map(v => [v]);
    const result = [];
    arr.forEach((fixed, index) => {
        const rest = arr.slice(index + 1);
        const combinations = combine(rest, count - 1).map(items => [fixed, ...items]);
        result.push(...combinations);
    });
    return result;
};

console.log(combine(numbers, m).map(items => items.join(' ')).join('\n'));