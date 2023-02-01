function solution(n, wires) {
    let answer = n;
    let visited = Array(n+1).fill(false);
    //전달받은 송전탑과 연결된 송전탑의 개수를 구하는 함수
    const getNewTowerCount = (splicedWires, tower) => {
        let towerCount = 0;
        const stack = [tower];
        while(stack.length) {
            const now = stack.shift();
            if(!visited[now]) towerCount++;
            visited[now] = true;
            for(let i=0; i<splicedWires.length; i++) {
                const [start, end] = splicedWires[i];
                if(start !== now && end !== now) {
                    continue;
                }
                if(!visited[end]) stack.push(end);
                if(!visited[start]) stack.push(start);
            }
        }
        return towerCount;
    };

    for(let i=0; i<wires.length; i++) {
        visited = visited.map(value => false);
        const splicedWires = [...wires]; //전선들 중 하나가 끊어진 전선 정보
        splicedWires.splice(i,1);
        
        const count = [0, 0];
        let index = 0;
        
        for(let tower=1; tower<=n; tower++) {
            if(visited[tower]) continue;
            count[index] = getNewTowerCount(splicedWires, tower);
            index++;
        }
        
        //각 전력망의 송전탑 개수 차이가 더 줄어들었는지 비교
        answer = Math.min(answer, Math.abs(count[0] - count[1]));
    }

    return answer;
}
