function solution(n, t, m, p) {
    let tube = '';
    let nowNumber = 0;
    let numbersListed = '0';
    
    for(let index = 0; index < t; index++) {
        const nextIndex = m * index + (p - 1);
        while(numbersListed.length - 1 < nextIndex) {
            nowNumber += 1;
            numbersListed += nowNumber.toString(n).toUpperCase();
        }
        tube += numbersListed[nextIndex];
    }
    
    return tube;
}