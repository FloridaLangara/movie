const apiKey = "821554f1ceb2aa758904a39f681f08b8";

export function getNowPlayingMovies() {
     return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        });
}

export function getPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export function getTopRatedMovies() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export function getUpcomingMovies() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
