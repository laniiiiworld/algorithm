function solution(stones, k) {
    stones.push(Infinity);
    let stack = [-1];
    let minOfMax = 200000000;
    for (let index = 0; index < stones.length; index++) {
        const value = stones[index];
        while (stones[stack[stack.length - 1]] < value) {
            const item = stack.pop();
            if (stack[stack.length - 1] >= index - k) continue;
            
            minOfMax = (stones[item] < minOfMax)? stones[item] : minOfMax;
        }
        stack.push(index);
    }
    return minOfMax;
}