const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input[0]);
const texts = input.slice(1);
const isPalindrome = (start, end, text) => {
    while(start < end) {
        if(text[start] !== text[end]) return false;
        start += 1;
        end -= 1;
    }
    return true;
};
const checkText = (start, end, text) => {
    while(++start < --end) {
        if(text[start] === text[end]) continue;
        
        if( isPalindrome(start, end - 1, text) || 
            isPalindrome(start + 1, end, text)) {
            return 1;
        }
        
        return 2;
    }

    return 0;
};

// 0:회문, 1:유사회문, 2:그 외
const answer = [];
for(const text of texts) {
    answer.push(checkText(-1, text.length, text));
}

console.log(answer.join('\n'));