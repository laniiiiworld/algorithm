function solution(gems) {
    const standard = new Set(gems);
    const cart = new Map();
    let length = gems.length + 1;
    let answer = [0, 0];
    let left = 0;
    let right = 0;
    
    while(right <= gems.length) {
        while(cart.size < standard.size) {
            const gem = gems[right];
            const count = cart.get(gem) || 0;
            cart.set(gem, count + 1);
            right += 1;
        }
        
        if(cart.size === standard.size && right - left < length) {
            length = right - left;
            answer = [left + 1, right];
        }
        
        const gem = gems[left];
        const count = cart.get(gem);
        if(count === 1) {
            cart.delete(gem);
        } else {
            cart.set(gem, count - 1);
        }
        left += 1;
    }
    
    return answer;
}