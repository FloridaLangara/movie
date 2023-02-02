import {useEffect, useState} from "react";
import {Alert, FlatList, Pressable, SafeAreaView, Text, View} from "react-native";
import {getNowPlayingMovies} from "../api/movie";
import Movie from "../components/Movie";

const MoviesScreen = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovieData = async  () => {
        const data = await getNowPlayingMovies();
        setMovies(data);
        console.log(movies);
    }

    useEffect(() => {
        fetchMovieData();
    }, []);


    return (
        <SafeAreaView>
            <FlatList
                data={movies}
                renderItem={({item}) =>
                    <Movie
                        image={item.poster_path}
                        movieTitle={item.title}
                        popularity={item.popularity}
                        releaseDate={item.release_date}
                    />}
            />
        </SafeAreaView>
    )
}

export default MoviesScreen;
