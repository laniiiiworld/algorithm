function solution(routes) {
    routes.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    const cameras = [routes[0][1]];
    for(const [start, end] of routes) {
        const camera = cameras[cameras.length - 1];
        if(end < camera) {
            cameras.pop();
            cameras.push(end);
        } else if(camera < start) {
            cameras.push(end);
        }
    }
    
    return cameras.length;
}