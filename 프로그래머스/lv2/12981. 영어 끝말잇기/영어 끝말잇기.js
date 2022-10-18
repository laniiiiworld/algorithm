function solution(n, words) {
    let toldwords = [words[0]]; //이전에 등장했던 단어들
    let index = 0;
    
    while (++index < words.length) {
        const word = words[index];
        //이전에 등장했던 단어인 경우
        if(toldwords.some(value => value === word)) break;
        //앞사람이 말한 단어의 마지막 문자로 시작하지 않는 경우
        if(toldwords[toldwords.length-1].slice(-1) !== word[0]){
            break;
        }
        toldwords.push(word);
    }
    
    return index < words.length? [index%n + 1, Math.ceil((index+1)/n)] : [0,0];
}