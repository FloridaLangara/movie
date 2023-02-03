import {useEffect, useState} from "react";
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";

import {getMovieDetails} from "../api/movie";

const MovieDetailsScreen = ({route, navigation}) => {
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetailsData = async  () => {
        const data = await getMovieDetails(route?.params?.movieId);
        setMovieDetails(data);

    }

    useEffect( () => {
        fetchMovieDetailsData();
    }, [route?.params?.movieId]);

    useEffect(() => {
        navigation.setOptions({ headerTitle: movieDetails?.title })
    }, [movieDetails?.title]);



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{movieDetails?.title}</Text>
            <Image style={styles.image} source={{uri: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
            <Text style={styles.description}>{movieDetails?.overview}</Text>
            <View style={styles.secondContainer}>
                <Text style={styles.footerText}>Popularity: {movieDetails?.popularity} | </Text>
                <Text style={styles.footerText}>Release Date: {movieDetails?.release_date}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        marginHorizontal: 32,
        marginTop: "15%",
    },
    description: {
        marginTop: 16,
        color: "#7f868f",
        fontWeight: "400",
        fontSize: 14,
    },
    footerText: {
        color: "#7f868f",
        fontWeight: "400"
    },
    image: {
        width: "80%",
        height: "35%",
        marginBottom: 16,
    },
    secondContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 36,
    }
});

export default MovieDetailsScreen;
