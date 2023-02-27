function solution(arr) {
    const getGCD = (a, b) => {
        if(a < b) [a, b] = [b, a];
        while(a % b) {
            [a, b] = [b, a % b];
        }
        return b;
    };
    
    return arr.reduce((lcm, number) => lcm *= number/getGCD(lcm, number), 1);
}