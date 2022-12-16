function solution(gems) {
    const jewelry = new Set(gems);
    const myGems = new Map();
    let [left, right] = [-1, -1];
    let startIndex = 0;
    let minSize = Infinity;
    
    if(jewelry.size === 1) return [1,1];
    
    while(right < gems.length) {
        if(jewelry.size > myGems.size) {
            right++;
            myGems.set(gems[right], (myGems.get(gems[right]) || 0) + 1);
            continue;
        }
        
        left++;
        const count = myGems.get(gems[left]) - 1;
        if(count) {
            myGems.set(gems[left], count);
        } else {
            myGems.delete(gems[left]);
        }
        
        if((right + 1) - left >= minSize) continue;
        startIndex = left;
        minSize = (right + 1) - startIndex;
    }
    
    return [startIndex + 1, startIndex + minSize];
}