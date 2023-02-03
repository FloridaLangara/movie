import {useEffect, useState} from "react";
import {Image, SafeAreaView, Text} from "react-native";
import {getMovieDetails} from "../api/movie";

const MovieDetailsScreen = ({route}) => {
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetailsData = async  () => {
        const data = await getMovieDetails(route.params.movieId);
        setMovieDetails(data);
        console.log(JSON.stringify(movieDetails));
    }

    useEffect( () => {
        fetchMovieDetailsData(route.params.movieId);
    }, [route.params.movieId]);


    return (
        <SafeAreaView>
            <Text>{movieDetails?.original_title}</Text>
            <Image source={{uri: "https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/>
            <Text>
                {movieDetails?.overview}
            </Text>
            <Text>Popularity: {movieDetails?.popularity}</Text>
            <Text>Release Date: {movieDetails?.release_date}</Text>
        </SafeAreaView>
    );
}

export default MovieDetailsScreen;
