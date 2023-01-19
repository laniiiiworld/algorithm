function solution(ingredient) {
    let count = 0;
    const stack = [];
    
    for(let i=0; i<ingredient.length; i++) {
        const value = ingredient[i];
        stack.push(value);
        if(stack.length < 4 || value !== 1) continue;
        
        if(stack.slice(-4).join('') === '1231') {
            count++;
            stack.splice(-4);
            continue;
        }
    }
    
    return count;
}