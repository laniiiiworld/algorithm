function solution(n) {
    const answer = [];
    const moveBlocks = (m, one, two, three) => {
        if(m === 1) {
            answer.push([one, three]);
            return;
        }
        //m - 1개의 원판을 2번 기둥으로 이동
        moveBlocks(m - 1, one, three, two);
        //m번 원판을 3번 기둥으로 이동
        answer.push([one, three]);
        //m - 1개의 원판을 3번 기둥으로 이동
        moveBlocks(m - 1, two, one, three);
    };
    
    moveBlocks(n, 1, 2, 3);
    
    return answer;
}