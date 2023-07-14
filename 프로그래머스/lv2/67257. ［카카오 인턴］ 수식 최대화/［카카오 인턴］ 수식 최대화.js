function solution(expression) {
    let max = 0;
    const baseOperations = ['+', '-', '*'];
    const visited = Array(3).fill(false);
    const calculate = (operands, operations, now) => {
        if(!operations.includes(now)) return [operands, operations];
        
        const newOperands = [operands[0]];
        const newOperations = [];
        
        for(let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            if(operation === now) {
                if(now === '+') {
                    newOperands.push(newOperands.pop() + operands[i + 1]);
                } else if(now === '-') {
                    newOperands.push(newOperands.pop() - operands[i + 1]);
                } else if(now === '*') {
                    newOperands.push(newOperands.pop() * operands[i + 1]);
                }
            } else {
                newOperands.push(operands[i + 1]);
                newOperations.push(operation);
            }
        }
        
        return [newOperands, newOperations];
    };
    const dfs = (operation, operands, operations) => {
        if(operation) {
            [operands, operations] = calculate(operands, operations, operation);
        }
        if(operations.length === 0) {
            max = Math.max(max, Math.abs(operands[0]));
            return;
        }
        for(let i = 0; i < 3; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(baseOperations[i], operands, operations);
            visited[i] = false;
        }
    };
    
    
    const operands = expression.split(/[\+\-\*]/g).map(Number);
    const operations = expression.match(/[\+\-\*]/g);
    dfs('', operands, operations);
    
    return max;
}