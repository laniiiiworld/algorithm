function solution(files) {
    return files
        .map((file, i) => {
            const matched = file.match(/^([a-zA-Z-\. ]+)([0-9]+)(.*)$/);
            return {
                name: file,
                head: matched[1].toLowerCase(),
                number: parseInt(matched[2]),
                index: i
            };
        })
        .sort((file1, file2) => {
            if (file1.head !== file2.head) {
                return (file1.head > file2.head) ? 1 : -1;
            }
            if (file1.number !== file2.number) {
                return file1.number - file2.number;
            }
            return file1.index - file2.index;
        })
        .map(file => file.name);
}