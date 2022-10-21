//조합 응용
function solution(number) {
    let count = 0;
    const combination = (k, sum, start) => {
        if(k === 0) {
            count += (sum === 0)? 1 : 0;
            return;
        }
        for(let i=start; i<number.length; i++) {
            combination(k-1, sum + number[i], i+1);
        }
    };
    combination(3, 0, 0);
    return count;
}
