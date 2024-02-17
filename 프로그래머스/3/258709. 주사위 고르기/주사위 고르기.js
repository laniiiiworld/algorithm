function solution(dice) {
    let maxScore = 0;
    let answer = [];
    const n = dice.length;
    const plusDice = (arr1, arr2) => {
        const result = [];
        for(const a of arr1) {
            for(const b of arr2) {
                result.push(a + b);
            }
        }
        return result;
    };
    const getScores = (selected) => {
        return selected.reduce((result, index) => {
            return result = result.length? plusDice(result, dice[index]) : dice[index];
        }, []);
    };
    const calculateScore = (arrA, arrB) => {
        const scoresA = getScores(arrA).sort((a, b) => b - a);
        const scoresB = getScores(arrB).sort((a, b) => a - b);
        return scoresA.reduce((total, a) => {
            let left = 0;
            let right = scoresB.length - 1;
            while(left <= right) {
                const mid = Math.floor((left + right) / 2);
                if(scoresB[mid] < a) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return total += left;
        }, 0);
    };
    const selectDices = (start, arrA) => {
        if(arrA.length === n / 2) {
            const arrB = [];
            for(let i = 0; i < n; i++) {
                if(arrA.includes(i)) continue;
                arrB.push(i);
            }
            const score = calculateScore(arrA, arrB);
            if(maxScore < score) {
                maxScore = score;
                answer = arrA.map(v => v + 1);
            }
            return;
        }
        
        for(let i = start; i < dice.length; i++) {
            selectDices(i + 1, [...arrA, i]);
        }
    };
    
    selectDices(0, []);
    
    return answer;
}