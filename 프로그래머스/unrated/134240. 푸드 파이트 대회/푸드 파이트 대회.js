function solution(food) {
    const half = food.map((v, i) => String(i).repeat(Math.floor(v/2)));
    return `${half.join('')}0${half.reverse().join('')}`;
}