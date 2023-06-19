function solution(brown, yellow) {
    let height = 0;
    let width = 0;
    
    while(++height < brown / 2) {
        const h = height - 2;
        width = (brown - (h * 2)) / 2;
        const w = width - 2;
        if(w * h === yellow) break;
    }
    
    return [width, height];
}