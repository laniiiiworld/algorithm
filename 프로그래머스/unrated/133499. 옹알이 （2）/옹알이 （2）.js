function solution(babbling) {
    const pronunciations = ["aya", "ye", "woo", "ma"];
    
    return babbling.reduce((sum, word) => {
        pronunciations.forEach((item) => {
            if(!word.replaceAll(item, '!').includes('!!')) {
                word = word.replaceAll(item, '*');
            }
        });
        word = word.replaceAll('*', '');
        return sum += word.length? 0 : 1;
    }, 0);
}