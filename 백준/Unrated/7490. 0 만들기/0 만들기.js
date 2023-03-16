const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input[0]);
const answer = Array.from({length: input.length - 1}, () => []);
const calculate = (operation, a, b, expression) => {
    if(operation === '+') return a + b;
    if(operation === '-') return a - b;
    return Number(`${a}${b}`);
};
let current = 1;

while(current <= testCase) {
    const n = input[current];
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    
    const dfs = (index, operation, a, b, expression) => {
        const calc = calculate(operation, a, b);
        if(index === n - 1) {
            if(calc === 0) answer[current - 1].push(expression);
            return;
        }
        dfs(index + 1, operation, a, Number(`${b}${numbers[index + 1]}`), `${expression} ${numbers[index + 1]}`);
        dfs(index + 1, '+', calc, numbers[index + 1], `${expression}+${numbers[index + 1]}`);
        dfs(index + 1, '-', calc, numbers[index + 1], `${expression}-${numbers[index + 1]}`);
    };
    
    dfs(0, '+', 0, numbers[0], `${numbers[0]}`);
    
    current += 1;
}
console.log(answer.map(items => items.join('\n')).join('\n\n'));