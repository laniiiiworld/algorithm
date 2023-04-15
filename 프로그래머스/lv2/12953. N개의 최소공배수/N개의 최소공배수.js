function solution(arr) {
    const getLCM = (a, b, ab = a * b) => {
        while(a % b) {
            [a, b] = [b, a % b];
        }
        return ab / b;
    };
    
    return arr.reduce((acc, cur) => acc = getLCM(acc, cur));
}