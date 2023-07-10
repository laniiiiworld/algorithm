function solution(files) {
    return files
            .map(file => {
                const regexp = /^([a-zA-Z- ]+)([0-9]+)(.*)$/;
                const [fullName, head, number] = file.match(regexp);
                return [head.toUpperCase(), Number(number), file];
            })
            .sort((a, b) => {
                if(a[0] > b[0]) return 1;
                if(a[0] < b[0]) return -1;
                return a[1] - b[1];
            })
            .map(item => item[2]);
}