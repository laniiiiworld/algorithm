function solution(n, k) {
    const isPrime = (number) => {
        if(number < 2) return false;
        for(let i=2; i*i<=number; i++) {
            if(number%i === 0) return false;
        }
        return true;
    };
    
    return n.toString(k)
            .split('0')
            .filter(value => {
                if(!value) return false;
                return isPrime(parseInt(value));
            })
            .length;
}