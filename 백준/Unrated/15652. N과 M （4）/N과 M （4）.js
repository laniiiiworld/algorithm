const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numbers = Array.from({length: n}, (_, i) => i + 1);
const combine = (arr, count) => {
    if(count === 1) return arr.map(v => [v]);
    const result = [];
    arr.forEach((fixed, index) => {
        const rest = arr.slice(index);
        const combinations = combine(rest, count - 1);
        const combination = combinations.map(items => [fixed, ...items]);
        result.push(...combination);
    });
    return result;
};

console.log(combine(numbers, m).map(row => row.join(' ')).join('\n'));