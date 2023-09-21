function solution(s) {
    const chunk = (s, n) => {
        if(s.length <= n) return [s];
        return [s.slice(0, n), ...chunk(s.slice(n), n)];
    };
    const compress = (s, n) => {
        const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
        const arr = chunk(s, n).reduce(([a, l, c], e) => {
            if(e === l) return [a, l, c + 1];
            return [make([a, l, c]), e, 1];
        }, ['', '', 0]);
        
        return make(arr);
    };
    
    const range = [...Array(s.length)].map((_, i) => i + 1);
    return Math.min(...range.map(i => compress(s, i).length));
};