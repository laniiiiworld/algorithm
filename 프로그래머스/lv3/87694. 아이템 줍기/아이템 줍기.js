const directions = [[0, 0], [0, -1], [-1, -1], [-1, 0]];
const moving = [[1, 0], [0, -1], [-1, 0], [0, 1]];

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const pointSet = new Set();
    rectangle.forEach(v => {
        const [x1, y1, x2, y2] = v;
        for (let i = x1; i < x2; i++) {
            for (let j = y1; j < y2; j++) {
                pointSet.add(i + ',' + j);
            }
        }
    });
    const move = (position) => {
        for (let i = 0; i <= 4; i++) {
            const prevBlockPosition = directions[i].map((v, i) => v + position[i]).join(',');
            const nextBlockPosition = directions[(i+1)%4].map((v, i) => v + position[i]).join(',');
            if (
                !pointSet.has(prevBlockPosition) && 
                pointSet.has(nextBlockPosition)
            ) return position.map((v, j) => v + moving[i][j])
        }
    }
    let clockWiseDistance = 0, reverseDistance = 0;
    let position = [characterX, characterY];
    while(position[0] != itemX || position[1] != itemY) {
        position = move(position);
        clockWiseDistance += 1;
    }
    while(position[0] != characterX || position[1] != characterY) {
        position = move(position);
        reverseDistance += 1;
    }


    return Math.min(clockWiseDistance, reverseDistance);
}