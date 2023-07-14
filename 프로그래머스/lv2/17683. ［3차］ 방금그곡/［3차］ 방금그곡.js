function solution(m, musicinfos) {
    const answer = [];
    const getMinute = (time) => {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    };
    const replaceMelody = (melody) => {
        const result = [];
        const replaced = {'A#': 'H', 'C#': 'I', 'D#': 'J', 'F#': 'K', 'G#': 'L'};
        for(let i = 0; i < melody.length; i++) {
            const now = melody[i];
            if(now === '#') {
                result.push(replaced[`${result.pop()}#`]);
            } else {
                result.push(melody[i]);
            }
        }
        return result.join('');
    };
    
    m = replaceMelody(m);
    
    for(const musicinfo of musicinfos) {
        let [startTime, endTime, title, melody] = musicinfo.split(',');
        
        melody = replaceMelody(melody);
        
        const playTime = getMinute(endTime) - getMinute(startTime);
        const playMelody = melody.repeat(Math.floor(playTime/melody.length)) + melody.slice(0, playTime%melody.length);
        if(playMelody.includes(m)) {
            answer.push([title, playTime]);
        }
    }
    
    if(answer.length === 0) return '(None)';
    
    answer.sort((a, b) => b[1] - a[1]);
    
    return answer[0][0];
}