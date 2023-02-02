function solution(n, lost, reserve) {
    const students = Array.from({length: n+1}, () => ({isLend: true, count: 1}));
    lost.forEach((id) => students[id] = {isLend: false, count: 0});
    
    reserve.forEach((id) => {
        if(students[id].count === 0) {
            students[id].count += 1;
        } else if(students[id].isLend && students[id-1].count === 0) {
            students[id-1].count += 1;
        } else if(students[id].isLend && students[id+1]?.count === 0) {
            students[id+1].count += 1;
        } else {
            students[id].count += 1;
        }
    });
    
    return students.filter(student => student.count > 0).length - 1;
}