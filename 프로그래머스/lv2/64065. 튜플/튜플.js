function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
        if (n) {
            return arr.concat(v.filter(f => !arr.includes(f)));
        }
        return v;
    }, []);
}