function solution(s) {
    return s.split(' ')
            .map(text => text? text.at(0).toUpperCase() + text.slice(1).toLowerCase() : '')
            .join(' ');
}