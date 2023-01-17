function solution(k, score) {
    const list = [];
    return score.map(value => {
        list.push(value);
        list.sort((a,b) => b - a);
        if(list.length > k) list.pop();
        return list[list.length - 1];
    });
}