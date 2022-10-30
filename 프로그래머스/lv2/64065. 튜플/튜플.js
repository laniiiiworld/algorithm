function solution(s) {
    const arr = [];
    return s.split('},')
            .map(value => value.replace(/[\{\}]/g,'').split(','))
            .sort((a,b) => a.length - b.length)
            .map(item => {
                const str = item.filter(v => !arr.includes(Number(v)));
                const n = Number(str);
                arr.push(n);
                return n;
            });
}