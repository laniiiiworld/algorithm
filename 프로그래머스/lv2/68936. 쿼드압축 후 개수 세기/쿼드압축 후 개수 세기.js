function solution(arr) {
    const n = arr.length;
    const answer = [0, 0];
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    const visiteArr = (x, y, w) => {
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < w; j++) {
                arr[i + y][j + x] = true;
            }
        }
    };
    const isEquals = (x, y, w, target) => {
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < w; j++) {
                if(arr[i + y][j + x] !== target) return false;
            }
        }
        
        return true;
    };
    
    let width = arr.length;
    while(width >= 1) {
        for(let i = 0; i < n; i += width) {
            for(let j=0; j < n; j += width) {
                if(visited[i][j]) continue;
                const value = arr[i][j];
                if(isEquals(j, i, width, value)) {
                    visiteArr(j, i, width);
                    answer[value] += 1;
                }
            }
        }
        width /= 2;
    }
    
    return answer;
}