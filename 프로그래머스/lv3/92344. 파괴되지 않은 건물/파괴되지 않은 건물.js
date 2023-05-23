function solution(board, skill) {
    const n = board.length;
    const m = board[0].length;
    const damages = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
    const accumulateDamage = (r1, c1, r2, c2, damage) => {
        damages[r1][c1] += damage;
        damages[r2 + 1][c1] += -1 * damage;
        damages[r1][c2 + 1] += -1 * damage;
        damages[r2 + 1][c2 + 1] += damage;
    };
    const makeDamages = () => {
        //좌 -> 우 누적합
        for(let i = 0; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                damages[i][j] += damages[i][j - 1];
            }
        }
        //상 -> 하 누적합
        for(let i = 1; i <= n; i++) {
            for(let j = 0; j <= m; j++) {
                damages[i][j] += damages[i - 1][j];
            }
        }
    };
    const applyDamage = () => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                board[i][j] += damages[i][j];
            }
        }
    };
    
    for(const [type, r1, c1, r2, c2, degree] of skill) {
        const damage = type === 1? -1 * degree : degree;
        accumulateDamage(r1, c1, r2, c2, damage);
    }
    makeDamages();
    applyDamage();
    
    return board.reduce((acc, row) => acc += row.filter(v => v > 0).length, 0);
}