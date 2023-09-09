function solution(gems) {
    const checkGap = (start, end, result) => {
        if(end - start - 1 < result[1] - result[0]) return true;
        return false;
    };
    const typeOfGems = new Set(gems);
    const carts = new Map();
    const n = gems.length;
    let answer = [0, n];
    let [start, end] = [0, 0];
    
    while(start < n) {
        while(end < n && carts.size < typeOfGems.size) {
            const count = carts.get(gems[end]) || 0;
            carts.set(gems[end++], count + 1);
        }
        if(carts.size === typeOfGems.size && checkGap(start, end, answer)) {
            answer = [start + 1, end];
        }
        const count = carts.get(gems[start]);
        if(count === 1) {
            carts.delete(gems[start++]);
        } else {
            carts.set(gems[start++], count - 1);
        }
    }
    
    return answer;
}