function solution(cacheSize, cities) {
    const hit = 1;
    const miss = 5;
    let lru = [];
    return cities.reduce((acc, cur) => {
                        const now = cur.toLowerCase();
                        const nowIndex = lru.indexOf(now);
                        if(nowIndex > -1) {
                            acc += hit;
                            const existed = lru.splice(nowIndex, 1);
                            lru = [...lru, ...existed];
                        }else {
                            acc += miss;
                            lru.push(now);
                            if(lru.length > cacheSize) lru.shift();
                        }
                        return acc;
                    }, 0);
}