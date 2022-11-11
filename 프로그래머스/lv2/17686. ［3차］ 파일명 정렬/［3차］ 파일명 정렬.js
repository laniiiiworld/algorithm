function solution(files) {
    return files.map(file => {
                    const [fileName, head, number, tail] = file.match(/([\D]+)([0-9]+)(.*)$/);
                    return [fileName, head.toLowerCase(), number, tail];
                })
                .sort((a, b) => {
                    if (a[1] > b[1]) return 1;
                    if (a[1] < b[1]) return -1;
                    return a[2] - b[2];
                })
                .map(item => item[0]);
}