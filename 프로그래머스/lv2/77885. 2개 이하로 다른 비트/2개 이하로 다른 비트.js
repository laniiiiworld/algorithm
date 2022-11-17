function solution(numbers) {
    return numbers.map(num => {
        if(num%2 === 0) return num + 1;
        const numToBinary = num.toString(2);
        let index = numToBinary.lastIndexOf('0');
        if(index === -1) {
            index = 0;
        } else if(index < numToBinary.length - 1) {
            index += 1;
        }
        
        const add = '1'.padEnd(numToBinary.length - index, '0');
        
        return num + parseInt(add, 2);
    });
}