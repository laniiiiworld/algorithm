function solution(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        s = s.slice(1, s.length)+s[0];

        let string = s;

        for (let j = 0; j < Math.floor(s.length/2); j++) {
            string = string.replace(/([\[][\]]|[\{][\}]|[\(][\)])+/g, "");

            if (!string) break;
        }

        answer += !string ? 1 : 0;
    }

    return answer;
}