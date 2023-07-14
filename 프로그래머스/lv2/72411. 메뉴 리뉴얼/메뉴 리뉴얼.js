function solution(orders, course) {
    const ordersArr = orders.map(order => order.split('').sort());
    const getLimitedArr = (limit, arr) => {
        const results = [];
        const n = arr.length;
        const visited = Array(n).fill(false);
        const dfs = (start, text) => {
            if(text.length === limit) {
                results.push(text);
                return;
            }

            for(let i = start; i < n; i++) {
                if(visited[i]) continue;
                visited[i] = true;
                dfs(i, `${text}${arr[i]}`);
                visited[i] = false;
            }
        };

        dfs(0, '');

        return results;
    };

    const getCandidate = (limit) => {
        const menus = new Map();

        for(const order of ordersArr) {
            const arr = getLimitedArr(limit, order);
            for(const item of arr) {
                const count = menus.get(item) || 0;
                menus.set(item, count + 1);
            }
        }

        const maxCount = Math.max(...menus.values());
        return [...menus.entries()]
                        .filter(item => item[1] > 1 && item[1] === maxCount)
                        .map(item => item[0]);
    };

    const answer = [];
    for(const value of course) {
        answer.push(getCandidate(value));
    }

    return answer.flat().sort();
}