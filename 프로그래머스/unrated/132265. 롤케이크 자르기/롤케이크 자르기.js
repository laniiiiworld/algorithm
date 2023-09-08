function solution(topping) {
    const a = new Set(); //철수
    const b = new Map(); //동생
    
    for(const value of topping) {
        const count = b.get(value) || 0;
        b.set(value, count + 1);
    }
    
    let answer = 0;
    
    for(const value of topping) {
        if(a.size > b.size) break;
        a.add(value);
        const count = b.get(value) - 1;
        if(count > 0) {
            b.set(value, count);
        } else {
            b.delete(value);
        }
        if(a.size === b.size) {
            answer += 1;
        }
    }
    
    return answer;
}