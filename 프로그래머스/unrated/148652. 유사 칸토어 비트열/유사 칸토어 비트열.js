function solution(n, l, r) {
    const getRest = (index) => {
        const graph = [1, 1, 0, 1, 1];
        let count = 0;
        for(let i = 0; i < index; i++) {
            count += Number(graph[i]);
        }
        return count;
    };
    const getCount = (type, a, pow) => {
        const divided = Math.pow(5, pow);
        let share = Math.floor(a / divided);
        
        a %= divided;
        let rest = 0;
        if(share !== 2) {
            rest = a < 5 ? getRest(a) : getCount(type, a, pow - 1);
        }
        
        share = share > 2 ? share - 1 : share;
        
        return share * Math.pow(4, pow) + rest;
    };
    
    let countL = getCount('l', l - 1, n - 1);
    let countR = getCount('r', r, n - 1);
    
    return countR - countL;
}