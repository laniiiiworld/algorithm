function solution(operations) {
    const numbers = [];

    operations.forEach(operation => {
        const [code, value] = operation.split(' ');

        if(code === 'I') {
            numbers.push(Number(value)); //주어진 숫자를 삽입
            numbers.sort((a, b) => b - a);
        } else {
            if(value === '1') {
                numbers.shift(); //최댓값을 삭제
            } else {
                numbers.pop();   //최솟값을 삭제
            }
        }
    });

    if(numbers.length === 1) return [numbers[0], numbers[0]];

    return numbers.length? [numbers[0], numbers.pop()] : [0, 0];
}