function solution(board) {
    const getLineCount = (target) => {
        let count = 0;
        
        //가로
        for(let i = 0; i < board.length; i++) {
            let isRow = true;
            for(let j = 0; j < board[i].length; j++) {
                isRow = board[i][j] === target;
                if(!isRow) break;
            }
            count += (isRow)? 1 : 0;
        }
        
        //세로
        for(let j = 0; j < board[0].length; j++) {
            let isRow = true;
            for(let i = 0; i < board.length; i++) {
                isRow = board[i][j] === target;
                if(!isRow) break;
            }
            count += (isRow)? 1 : 0;
        }
        
        //대각선
        if(board[0][0] === target && board[1][1] === target && board[2][2] === target) {
            count += 1;
        }
        if(board[0][2] === target && board[1][1] === target && board[2][0] === target) {
            count += 1;
        }
        
        return count;
    };
    
    let countO = 0;
    let countX = 0;
    
    for(const row of board) {
        for(const value of row) {
            countO += (value === 'O')? 1 : 0;
            countX += (value === 'X')? 1 : 0;
        }
    }
    
    //O가 선공이므로 1개 더 많거나 같아야 한다.
    if(countO !== countX && countO - countX !== 1) return 0;
    
    const lineO = getLineCount('O');
    const lineX = getLineCount('X');
    
    //둘 다 라인을 완성하지 못했다면 무승부이다.
    if(lineO === 0 && lineX === 0) return 1;
    //둘 다 이길 수는 없다.
    if(lineO && lineX) return 0;
    //O가 이긴 경우 O의 개수가 1개 더 많다.
    if(lineO && countO === countX + 1) return 1;
    //X가 이긴 경우 O와 X의 개수가 같다.
    if(lineX && countO === countX) return 1;

    return 0;
}