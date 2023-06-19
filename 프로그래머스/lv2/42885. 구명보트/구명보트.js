function solution(people, limit) {
    let answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a, b) => a - b);
    
    while(left <= right) {
        answer += 1;
        
        if(people[left] + people[right] <= limit) {
            left += 1;
            right -= 1;
        } else {
            right -= 1;
        }
    }
    
    return answer;
}