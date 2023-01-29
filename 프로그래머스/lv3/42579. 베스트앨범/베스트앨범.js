function solution(genres, plays) {
    const genreMap = new Map();
    genres.map((genre, index) => ({genre, play: plays[index], index}))
          .forEach(({genre, play, index}) => {
               const item = genreMap.get(genre) || {total:0, sortedSongs: []};
               const sortedSongs = [...item.sortedSongs, {index, play}]
                                        .sort((a, b) => b.play - a.play)
                                        .slice(0, 2);
               genreMap.set(genre, {total: item.total + play, sortedSongs});
           });
    
    return [...genreMap.values()]
                .sort((a, b) => b.total - a.total)
                .flatMap(item => item.sortedSongs)
                .map(song => song.index);
}