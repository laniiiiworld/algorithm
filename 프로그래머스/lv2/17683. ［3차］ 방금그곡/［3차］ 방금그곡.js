function solution(m, musicinfos) {
    const getNewMelody = (melody) => {
        return melody.replaceAll('C#', 'c')
                     .replaceAll('D#', 'd')
                     .replaceAll('F#', 'f')
                     .replaceAll('G#', 'g')
                     .replaceAll('A#', 'a');
    };
    
    m = getNewMelody(m);
    
    const answer = musicinfos.map(text => {
                                let [start, end, title, melody] = text.split(',');
                                const [startHH24, startMM] = start.split(':');
                                const [endHH24, endMM] = end.split(':');
                                
                                melody = getNewMelody(melody);
                                
                                const length = melody.length;
                                const playedTime = (endHH24 - startHH24) * 60 + (endMM - startMM);
                                const played = melody.repeat(~~(playedTime / length)) + melody.slice(0, playedTime % length);
                                
                                return [title, played, playedTime];
                            })
                            .filter(item => item[1].includes(m))
                            .sort((a, b) => b[2] - a[2]);
    
    return answer.length? answer[0][0] : '(None)';
}