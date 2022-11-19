function solution(tickets) {
    const visited = new Array(tickets.length).fill(false);
    const citiesMap = new Map();
    let path = ['ICN'];
    
    tickets.forEach((ticket)=>{
        const cities = tickets.filter(([start, end]) => start === ticket[0])
                              .map(([start, end], i) => `${end}${i}`)
                              .sort();
        citiesMap.set(ticket[0], cities);
    });
    
    const dfs = (from) => {
        const cities = citiesMap.get(from)? citiesMap.get(from) : [];
        const beforePath = [...path];

        for(let i = 0; i < cities.length; i++) {
            const to = cities[i].replace(/[0-9]/g, '');
            //아직 사용 안한 티켓 index
            const index = tickets.findIndex((item, idx) => {
                return item[0] === from && item[1] === to && !visited[idx];
            });

            if(index === -1) continue;
            
            visited[index] = true;
            path.push(to);
            
            if (dfs(to)) break;
            
            path = beforePath;
            visited[index] = false;
        }
        
        return visited.every(value => value);
    }

    dfs('ICN');

    return path;
}
