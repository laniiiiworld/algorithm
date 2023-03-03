function solution(want, number, discount) {
    let answer = 0;
    const list = new Map();
    const isEqual = () => {
        if(list.size !== want.length) return false;
        
        for(let i=0; i<want.length; i++) {
            const count = list.get(want[i]) || 0;
            if(count !== number[i]) return false;
        }
        
        return true;
    };
    
    for(let i=0; i<10; i++) {
        const item = discount[i];
        const count = list.get(item) || 0;
        list.set(item, count + 1);
    }
    
    if(isEqual()) answer += 1;
    
    for(let i=10; i<discount.length; i++) {
        const minusItem = discount[i-10];
        const minusCount = list.get(minusItem);
        if(minusCount === 1) {
            list.delete(minusItem);
        } else {
            list.set(minusItem, minusCount - 1);
        }
        
        const plusItem = discount[i];
        const plusCount = list.get(plusItem) || 0;
        list.set(plusItem, plusCount + 1);
        
        if(isEqual()) answer += 1;
    }
    
    return answer;
}