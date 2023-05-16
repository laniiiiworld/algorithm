function solution(expression) {
    let answer = 0;
    const baseOperations = ['+','-','*'];
    const visited = Array(baseOperations.length).fill(false);
    const calculate = (operation, numbers, operations) => {
        const arr1 = [numbers[0]];
        const arr2 = [];
        
        for(let i = 0; i < operations.length; i++) {
            if(operations[i] !== operation) {
                arr1.push(numbers[i + 1]);
                arr2.push(operations[i]);
                continue;
            }
            
            let before = arr1.pop();
            
            if(operation === '*') arr1.push(before * numbers[i + 1]);
            if(operation === '+') arr1.push(before + numbers[i + 1]);
            if(operation === '-') arr1.push(before - numbers[i + 1]);
        }
        
        return [arr1, arr2];
    };
    const dfs = (operation, depth, numbers, operations) => {
        if(operation) {
            [numbers, operations] = calculate(operation, numbers, operations);
        }
        if(depth === baseOperations.length) {
            answer = Math.max(answer, Math.abs(numbers[0]));
            return;
        }
        
        for(let i = 0; i < baseOperations.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(baseOperations[i], depth + 1, numbers, operations);
            visited[i] = false;
        }
    };
    
    dfs('', 0, expression.split(/[-*+]/g).map(Number), expression.match(/[-*+]/g));
    
    return answer;
}