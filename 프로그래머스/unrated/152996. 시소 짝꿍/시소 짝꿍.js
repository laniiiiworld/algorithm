function solution(weights) {
    let count = 0;
    const myMap = new Map();
    const canBeBestFriend = (a, b) => {
        for(const value of myMap.get(b).weights) {
            if(myMap.get(a).weights.includes(value)) return true;
        }
        return false;
    };
    
    for(const weight of weights) {
        const item = myMap.get(weight) || {weights:[weight * 2, weight * 3, weight * 4], count: 0};
        myMap.set(weight, {...item, count : item.count + 1});
    }
    
    const keys = [...myMap.keys()];
    for(let i = 0; i < keys.length; i++) {
        const countI = myMap.get(keys[i]).count;
        if(countI > 1) {
            for(let plus = 1; plus < countI; plus++) {
                count += plus;
            }
        }
        for(let j = i + 1; j < keys.length; j++) {
            if(!canBeBestFriend(keys[i], keys[j])) continue;
            const countJ = myMap.get(keys[j]).count;
            count += countI * countJ;
        }
    }
    
    return count;
}