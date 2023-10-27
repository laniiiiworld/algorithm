function solution(n, t, m, p) {
    const tubeT = Array.from({length: t}, (a, i) => i * m + p - 1);
    const max = m * t + p;
    let line = '';
    
    for (let i = 0; line.length <= max; i++) {
        line += i.toString(n);
    }
    
    return tubeT.map(a => line[a]).join('').toUpperCase();
}