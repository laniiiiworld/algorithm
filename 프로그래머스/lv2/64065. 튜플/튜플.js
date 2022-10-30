function solution(s) {
    return JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'))
               .sort((a,b) => a.length - b.length)
               .reduce((arr, item) => {
                   const str = item.filter( v => !arr.includes(Number(v)) );
                   return arr = [...arr, Number(str)];
               }, []);
}