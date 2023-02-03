const apiKey = "821554f1ceb2aa758904a39f681f08b8";

export function fetchMoviesByCategory(selectedCategory) {
     return fetch(`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        });
}
