const isPrime = (value) => {
    const num = value? Number(value) : 0;
    if(num < 2) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
};

function solution(n, k) {
    return n.toString(k)
            .split('0')
            .filter(value => isPrime(value))
            .length;
}