const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const answer = [];
const numbers = Array.from({length: n}, (_, i) => i+1);
const permute = (arr, count) => {
    if(count === 1) return arr.map(v => [v]);
    const result = [];
    arr.forEach((fixed, index) => {
        const rest = arr.filter((v, i) => index !== i);
        const permutations = permute(rest, count - 1).map(items => [fixed, ...items]);
        result.push(...permutations);
    });
    return result;
};

console.log(permute(numbers, m).map(items => items.join(' ')).join('\n'));