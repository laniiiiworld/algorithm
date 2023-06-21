function solution(clothes) {
    let answer = 1;
    const myClothes = new Map();
    
    for(const [value, key] of clothes) {
        const count = myClothes.get(key) || 0;
        myClothes.set(key, count + 1);
    }

    for(const value of myClothes.values()) {
        answer *= (value + 1);
    }

    return answer - 1;
}