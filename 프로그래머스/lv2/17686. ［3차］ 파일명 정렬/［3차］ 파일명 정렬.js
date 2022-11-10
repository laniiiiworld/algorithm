function solution(files) {
    return files.map(file => {
                    const arr = file.split(/[\d]/g).filter(value => value);
                    const startIndex = file.indexOf(file.replace(arr[0],''));
                    const endIndex = arr[1]? file.indexOf(arr[1]) : file.length;
                    
                    const head = arr[0].toLowerCase();
                    const number = file.slice(startIndex, endIndex);
                    const tail = file.slice(endIndex);
                    
                    return [file, head, number, tail];
                })
                .sort((a, b) => {
                    if (a[1] > b[1]) return 1;
                    if (a[1] < b[1]) return -1;
                    return a[2] - b[2];
                })
                .map(item => item[0]);
}