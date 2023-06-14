function solution(n, build_frame) {
    //n X n 크기의 2차원 벽면
    //각 셀은 [기둥 존재 여부, 보 존재 여부]를 가진다.
    //1: 존재 O, 0: 존재 X
    const board = Array.from({length: n + 1}, () => Array.from({length: n + 1}, () => [0, 0]));
    const isInstall = (x, y, a) => {
        if(a === 0) { //기둥
            //바닥 위거나
            if(y === 0) return true;
            //기둥 밑의 한쪽 끝에 보가 있거나
            if((x && board[y][x - 1][1]) || board[y][x][1]) return true;
            //기둥 위거나
            if(board[y - 1][x][0]) return true;
        } else { //보
            //한쪽 끝이 기둥 위에 있거나
            if(y && board[y - 1][x][0]) return true;
            if(y && board[y - 1][x + 1][0]) return true;
            //양쪽 끝이 보로 연결되었거나
            if(x && board[y][x - 1][1] && board[y][x + 1][1]) return true;
        }
        return false;
    };
    const isDelete = (x, y, a) => {
        if(a === 0) { //기둥
            //기둥 위에 기둥
            if(board[y + 1][x][0] && !isInstall(x, y + 1, 0)) return false;
            //기둥 위의 한쪽 끝에 존재하는 보
            if(x && board[y + 1][x - 1][1] && !isInstall(x - 1, y + 1, 1)) return false;
            if(board[y + 1][x][1] && !isInstall(x, y + 1, 1)) return false;
        } else { //보
            //한쪽 끝 위에 존재하는 기둥
            if(board[y][x][0] && !isInstall(x, y, 0)) return false;
            if(board[y][x + 1][0] && !isInstall(x + 1, y, 0)) return false;
            //한쪽 끝에 연결된 다른 보
            if(x && board[y][x - 1][1] && !isInstall(x - 1, y, 1)) return false;
            if(board[y][x + 1][1] && !isInstall(x + 1, y, 1)) return false;
        }
        
        return true;
    };
    
    for(const [x, y, a, b] of build_frame) {
        if(b === 1) { //생성
            if(isInstall(x, y, a)) {
                board[y][x][a] = 1;
            }
        } else { //삭제
            board[y][x][a] = 0;
            //삭제하면 안되는 경우 원복
            if(!isDelete(x, y, a)) {
                board[y][x][a] = 1;
            }
        }
    }
    
    const answer = [];
    
    for(let col = 0; col <= n; col++) {
        for(let row = 0; row <= n; row++) {
            for(let constructure = 0; constructure < 2; constructure++) {
                if(!board[row][col][constructure]) continue;
                answer.push([col, row, constructure]);
            }
        }
    }
    
    return answer;
}