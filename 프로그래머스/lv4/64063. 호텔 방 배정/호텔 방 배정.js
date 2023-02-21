function solution(k, room_number) {
    const answer = [];
    const rooms = new Map();
    for(let i=0; i<room_number.length; i++) {
        let number = room_number[i];
        const arr = [];
        while(rooms.has(number)) {
            arr.push(number);
            number = rooms.get(number);
        }
        while(arr.length) {
            rooms.set(arr.pop(), number+1);
        }
        rooms.set(number, number+1);
        answer.push(number);
    }
    return answer;
}