function solution(arr) {
    const getLCM = (a, b, ab = a * b) => {
        while(a % b) {
            [a, b] = [b, a % b];
        }
        return ab / b;
    };
    let lcm = arr[0];
    for(let i = 1; i < arr.length; i++) {
        lcm = getLCM(lcm, arr[i]);
    }
    
    return lcm;
}