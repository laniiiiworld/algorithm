function solution(clothes) {
    const clothesByType = new Map();
    
    for(const [item, type] of clothes) {
        const items = clothesByType.get(type) || [];
        items.push(item);
        clothesByType.set(type, items);
    }
    
    let answer = 1;
    for(const items of clothesByType.values()) {
        answer *= (items.length + 1);
    }
    return answer - 1;
}