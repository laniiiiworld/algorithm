function solution(r1, r2) {
    let answer = 0;
    for (let x = 1; x <= r2; x++) {
        const min = (r1 >= x) ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;
        const max = Math.floor(Math.sqrt(r2 * r2 - x * x));
        answer += max - min + 1;

    }
    return 4 * answer;
}
