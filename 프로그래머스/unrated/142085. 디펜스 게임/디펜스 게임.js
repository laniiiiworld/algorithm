function solution(n, k, enemy) {
    const check = (round) => {
        if (round <= k) return true;

        let table = enemy.slice(0, round).sort((a, b) => b - a);
        let sum = 0;

        for (let i = k; i < table.length; i++) {
            sum += table[i];
            if (sum > n) return false;
        }
        
        return true;
    };
    
    let left = 0;
    let right = enemy.length;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left - 1;
}