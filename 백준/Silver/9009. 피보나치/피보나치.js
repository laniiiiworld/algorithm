const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input[0]);
const numbers = input.slice(1).map(Number);
const max = Math.max(...numbers);
const graph = [0, 1];
const answer = [];
const findIndex = (number) => {
    let left = 0;
    let right = graph.length;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(graph[mid] === number) return mid;
        if(graph[mid] < number) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left? left - 1 : left;
};
const getOtherFibonaccies = (number) => {
    const result = [];
    while(number > 0) {
        const index = findIndex(number);
        const now = graph[index];
        number -= now;
        result.push(now);
    }
    return result.reverse().join(' ');
};

graph[0] = 0;
graph[1] = 1;

let i = 2;
while(graph[graph.length - 1] < max) {
     graph.push(graph[i - 1] + graph[i - 2]);
     i += 1;
}

for(const number of numbers) {
    answer.push(getOtherFibonaccies(number));
}

console.log(answer.join('\n'));