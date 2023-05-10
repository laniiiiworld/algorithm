function solution(n, results) {
    let answer = 0;
    const gragh = Array.from({length: n+1}, () => ({win:new Set(), lose:new Set()}));
    results.forEach(([won, lost]) => {
        gragh[won].win.add(lost);
        gragh[lost].lose.add(won);
    });

    for(let player=1; player<=n; player++) {
        for(const lost of gragh[player].win) {
            for(const p of gragh[player].lose) {
                gragh[lost].lose.add(p);
            }
        }
        for(const won of gragh[player].lose) {
            for(const p of gragh[player].win) {
                gragh[won].win.add(p);
            }
        }
    }

    for(const player of gragh) {
        const count = player.win.size + player.lose.size;
        answer += (count === n-1)? 1 : 0;
    }

    return answer;
}