function solution(gems) {
    const SIZE = new Set(gems).size;
    const cart = new Map();
    let answer = [0, gems.length];
    let start = 0;
    let end = -1;
    const plusGemCount = () => {
        const gem = gems[++end];
        const count = cart.get(gem) || 0;
        cart.set(gem, count + 1);
    };
    const minusGemCount = () => {
        const gem = gems[start++];
        const count = cart.get(gem);
        if(count === 1) {
            cart.delete(gem);
        } else {
            cart.set(gem, count - 1);
        }
    };
    
    while(start <= gems.length - SIZE && end < gems.length) {
        while(cart.size < SIZE) {
            plusGemCount();
        }
        if(cart.size === SIZE) {
            if(end - start < answer[1] - answer[0]) {
                answer = [start + 1, end + 1];
            }
            minusGemCount();
        }
        while(cart.size > SIZE) {
            minusGemCount();
        }
    }
    
    return answer;
}