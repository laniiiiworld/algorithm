function solution(orders, course) {
    const getPermutation = (menus, count, order) => {
        const visited = Array(order.length).fill(false);
        const dfs = (start, maked) => {
            if(maked.length === count) {
                menus.set(maked.join(''), (menus.get(maked.join('')) || 0) + 1);
                return;
            }

            for(let i = start; i < order.length; i++) {
                if(maked.length >= count) break;
                if(visited[i]) continue;
                visited[i] = true;
                dfs(i, [...maked, order[i]]);
                visited[i] = false;
            }
        };
        
        dfs(0, []);
    };
    const findEnableMenus = (count) => {
        const menus = new Map();
        for(const order of orders) {
            getPermutation(menus, count, order);
        }
        return menus;
    };
    
    orders = orders.map(order => order.split('').sort());
    
    const results = [];
    for(const count of course) {
        const menus = findEnableMenus(count);
        let maxCounts = Math.max(...menus.values());
        if(maxCounts === 1) continue;
        for(const key of menus.keys()) {
            if(menus.get(key) !== maxCounts) continue;
            results.push(key);
        }
    }
    
    return results.sort();
}