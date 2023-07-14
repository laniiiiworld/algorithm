function solution(gems) {
    const n = gems.length;
    const types = new Set(gems);
    const carts = new Map();
    let [start, end] = [0, gems.length];
    let [s, e] = [0, 0];
    
    while(s < n) {
        while(e < n && carts.size < types.size) {
            const gem = gems[e++];
            const count = carts.get(gem) || 0;
            carts.set(gem, count + 1);
        }
        if(carts.size === types.size && end - start + 1 > e - s) {
            [start, end] = [s + 1, e];
        }
        const gem = gems[s++];
        const count = carts.get(gem);
        if(count > 1) {
            carts.set(gem, count - 1);
        } else {
            carts.delete(gem);
        }
    }
    
    return [start, end];
}
