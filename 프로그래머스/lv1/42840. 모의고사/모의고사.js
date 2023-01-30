function solution(answers) {
    let students = [{id: 1, score: 0}, {id: 2, score: 0}, {id: 3, score: 0}];
    const A = [1, 2, 3, 4, 5];
    const B = [2, 1, 2, 3, 2, 4, 2, 5];
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((answer, index) => {
        if(A[index%A.length] === answer) students[0].score++;
        if(B[index%B.length] === answer) students[1].score++;
        if(C[index%C.length] === answer) students[2].score++;
    });
    
    const maxScore = Math.max(...students.map(student => student.score));
    return students
            .filter(student => student.score === maxScore)
            .map(student => student.id);
}