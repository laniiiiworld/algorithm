function solution(ingredient) {
    let count = 0;
    const stack = [];
    const isHamberger = (items) => {
        const hamberger = [1, 2, 3, 1];
        for(let i=0; i<hamberger.length; i++) {
            if(items[i] !== hamberger[i]) return false;
        }
        return true;
    };
    
    for(let i=0; i<ingredient.length; i++) {
        const value = ingredient[i];
        stack.push(value);
        if(stack.length < 4 || value !== 1) continue;
        
        const items = stack.slice(-4);
        if(isHamberger(items)) {
            count++;
            stack.splice(-4);
            continue;
        }
    }
    
    return count;
}