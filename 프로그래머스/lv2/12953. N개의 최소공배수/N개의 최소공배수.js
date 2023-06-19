function solution(arr) {
    const getGCD = (a, b) => {
        while(a % b) {
            [a, b] = [b, a % b];
        }
        return b;
    };

    let gcd = arr[0];
    let lcm = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
        gcd = getGCD(lcm, arr[i]);
        lcm = lcm * arr[i] / gcd;
    }
    
    return lcm;
}