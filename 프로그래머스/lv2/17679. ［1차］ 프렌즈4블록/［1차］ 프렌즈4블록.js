function solution(m, n, board) {
    const stack = []; // 2X2 삭제 가능한 블럭들
    let isChanged = true;
    
    //board를 반시계방향으로 90도 회전시킨 board
    let copyBoard = new Array(n)
                        .fill(new Array(m).fill(''))
                        .map((item, y) => item.map((v, x) => board[x][y] ));
    
    // 2X2 삭제 가능한지 확인하는 함수
    const isRemove = (i,j) => {
        const now = copyBoard[i][j];
        
        if(copyBoard[i][j+1] !== now) return false;
        if(copyBoard[i+1][j] !== now) return false;
        if(copyBoard[i+1][j+1] !== now) return false;
        
        return true;
    };
    
    //블럭 배치를 업데이트하는 함수
    const setCopyBoard = () => {
        // stack에 있는 블럭들 2X2 삭제
        while(stack.length) {
            const [i, j] = stack.pop();
            copyBoard[i][j] = '0';
            copyBoard[i][j+1] = '0';
            copyBoard[i+1][j] = '0';
            copyBoard[i+1][j+1] = '0';
        }
        //빈 공간 채우기
        copyBoard = copyBoard.map(item => item.join('')
                                  .replaceAll('0','')
                                  .padStart(m, '0')
                                  .split('')
                                 );
    };
    
    while(isChanged) {
        isChanged = false;
        
        for(let i=0; i< n-1; i++) {
            for(let j=0; j<m-1; j++) {
                if(copyBoard[i][j] === '0') continue;
                if(!isRemove(i,j)) continue;
                
                isChanged = true;
                stack.push([i, j]);
            }
        }
        
        setCopyBoard();
    }
    
    return copyBoard.reduce((acc, cur) => {
                        acc += cur.filter(v => v === '0').length;
                        return acc;
                    }, 0);
}