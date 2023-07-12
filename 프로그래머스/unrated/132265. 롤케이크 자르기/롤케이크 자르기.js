function solution(topping) {
    let count = 0;
    
    const a = new Map();
    const b = new Map();
    
    for(const value of topping) {
        const count = a.get(value) || 0;
        a.set(value, count + 1);
    }
    
    for(const value of topping) {
        const countA = a.get(value) || 0;
        const countB = b.get(value) || 0;
        
        if(countA > 1) {
            a.set(value, countA - 1);
        } else {
            a.delete(value);
        }
        
        b.set(value, countB + 1);
        
        if(a.size === b.size) {
            count += 1;
        }
    }
    
    return count;
}