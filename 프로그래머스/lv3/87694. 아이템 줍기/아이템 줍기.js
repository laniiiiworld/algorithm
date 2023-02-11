function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = Infinity;
    const N = Math.max(...rectangle.map(item => Math.max(...item))) * 2;
    // 0 : field 외부
    // 1 : rectangle 테두리
    // -1: rectangle 내부
    // 2 : 지나간 곳
    const field = Array.from({length: N+1}, () => Array(N+1).fill(0));
    
    rectangle.forEach(([x1, y1, x2, y2]) => {
        x1 *= 2;
        y1 *= 2;
        x2 *= 2;
        y2 *= 2;
        
        // 사각형 테두리
        for(let i=x1; i<=x2; i++) {
            if(field[y1][i] > -1) field[y1][i] = 1;
            if(field[y2][i] > -1) field[y2][i] = 1;
        }
        for(let j=y1; j<=y2; j++) {
            if(field[j][x1] > -1) field[j][x1] = 1;
            if(field[j][x2] > -1) field[j][x2] = 1;
        }
        // 사각형 내부
        for(let i=x1+1; i<x2; i++) {
            for(let j=y1+1; j<y2; j++) {
                field[j][i] = -1;
            }
        }
    });
    
    const moveCharacter = (x, y, count) => {
        if(x === itemX*2 && y === itemY*2) {
            answer = Math.min(answer, count);
            return;
        }
        
        field[y][x] = 2;
        
        if(x+1 <= N && field[y][x+1] === 1) {moveCharacter(x+1, y, count+1);}
        if(y+1 <= N && field[y+1][x] === 1) {moveCharacter(x, y+1, count+1);}
        if(x-1 >= 0 && field[y][x-1] === 1) {moveCharacter(x-1, y, count+1);}
        if(y-1 >= 0 && field[y-1][x] === 1) {moveCharacter(x, y-1, count+1);}
    };
        
    moveCharacter(characterX*2, characterY*2, 0);
    
    return answer/2;
}