function solution(info, query) {
    const hash = new Map();
    const getCount = (key, score) => {
        const scores = hash.get(key) || [];
        
        let left = 0;
        let right = scores.length;
        
        while(left < right) {
            const mid = Math.floor((left + right) / 2);
            if(scores[mid] >= score) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    };
    
    for(const row of info) {
        const [a, b, c, d, e] = row.split(' ');
        const key = `${a}-${b}-${c}-${d}`;
        const scores = hash.get(key) || [];
        hash.set(key, [...scores, Number(e)]);
    }

    for(const [key, scores] of hash) {
        hash.set(key, scores.sort((a, b) => b - a));
    }
    
    return query.map(q => {
        const [a, b, c, str] = q.split(' and ');
        const [d, e] = str.split(' ');
        const score = Number(e);
        const arrA = a !== "-" ? [a] : ['cpp', 'java', 'python']
        const arrB = b !== "-" ? [b] : ['backend', 'frontend']
        const arrC = c !== "-" ? [c] : ['junior', 'senior']
        const arrD = d !== "-" ? [d] : ['chicken', 'pizza']
        
        let result = 0;
        for(const v1 of arrA) {
            for(const v2 of arrB) {
                for(const v3 of arrC) {
                    for(const v4 of arrD) {
                        result += getCount(`${v1}-${v2}-${v3}-${v4}`, score);
                    }
                }
            }
        }
        return result;
    });
}