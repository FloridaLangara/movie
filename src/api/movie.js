const apiKey = "821554f1ceb2aa758904a39f681f08b8";

// Fetch movies by category

export function fetchMoviesByCategory(selectedCategory) {
     return fetch(`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        });
}

//Search movies , multi and tv show data

export function searchByCategory(searchTerm, selectedCategory) {
    return fetch(`https://api.themoviedb.org/3/search/${selectedCategory}?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        })
}


//Get TV shows by category
export function fetchTvShowsByCategory(selectedCategory) {
    return fetch(`https://api.themoviedb.org/3/tv/${selectedCategory}?api_key=${apiKey}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
        })
}

//Get Movie Details
export function getMovieDetails(movieId) {
//     return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
//         .then((response) => response.json())
//         .then((data) => {
//             return data;
//         })

    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
}
