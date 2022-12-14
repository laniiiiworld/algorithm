function solution(arr) {
    const visited = Array.from(Array(arr.length), () => Array(arr.length).fill(false));
    const answer = [0, 0];
    const checkArea = (startX, startY, size) => {
        let num = arr[startX][startY];
        for(let i=startX; i<startX+size; i++){
            for(let j=startY; j<startY+size; j++){
                if(arr[i][j] !== num) return -1;
            }
        }
        return num;
    };
    const setVisited = (startX, startY, size) => {
        for(let i=startX; i<startX+size; i++){
            for(let j=startY; j<startY+size; j++){
                visited[i][j] = true;
            }
        }
    };
    
    let width = arr.length;
    while(width >= 1) {
        for(let i=0; i<arr.length; i+=width) {
            for(let j=0; j<arr.length; j+=width) {
                if(visited[i][j]) continue;
                const isMatched = checkArea(i, j, width);
                if(isMatched === -1) continue;
                setVisited(i, j, width);
                answer[isMatched]++;
            }
        }
        width /= 2;
    }
    
    return answer;
}