function solution(k, d) {
    let count = ~~(d / k) * 2 + 1; //직선인 경우의 수
    
    //직각삼각형 빗변의 길이 : a제곱 + b제곱 = c제곱 응용
    for(let i = k; i <= d; i += k) {
        count += ~~(Math.sqrt(d * d - i * i) / k);
    }
    
    return count;
}