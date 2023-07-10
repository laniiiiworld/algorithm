function solution(files) {
    return files
            .map(file => {
                const head = file.match(/[a-zA-Z- ]+/g)[0];
                const number = Number(file.match(/[0-9]+/g)[0]);
                return [head.toUpperCase(), number, file];
            })
            .sort((a, b) => {
                if(a[0] > b[0]) return 1;
                if(a[0] < b[0]) return -1;
                return a[1] - b[1];
            })
            .map(item => item[2]);
}