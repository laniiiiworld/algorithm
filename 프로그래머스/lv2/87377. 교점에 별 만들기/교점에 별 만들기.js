function solution(line) {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    const dots = new Set();
    
    for(let i = 0; i < line.length; i++) {
        const [a, b, e] = line[i];
        for(let j = i + 1; j < line.length; j++) {
            const [c, d, f] = line[j];
            
            if(a * d === b * c) continue; // 평행
            
            const x = (b * f - e * d) / (a * d - b * c);
            const y = (e * c - a * f) / (a * d - b * c);
            
            if(x !== Math.floor(x) || y !== Math.floor(y)) continue;
            
            dots.add(`${String(x).padStart(4,'0')}${String(y).padStart(4,'0')}`);
            
            maxX = Math.max(x, maxX);
            maxY = Math.max(y, maxY);
            minX = Math.min(x, minX);
            minY = Math.min(y, minY);
        }
    }
    
    const answer = [];
    
    for(let row = maxY; row >= minY; row--) {
        let text = '';
        for(let col = minX; col <= maxX; col++) {
            const xy = `${String(col).padStart(4,'0')}${String(row).padStart(4,'0')}`;
            if(dots.has(xy)) {
                text += '*';
            } else {
                text += '.';
            }
        }
        answer.push(text);
    }
    
    return answer;
}