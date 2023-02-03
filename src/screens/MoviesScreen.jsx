import React, {useEffect, useState} from "react";
import {FlatList, Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import {getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} from "../api/movie";
import BottomSheet from "../components/BottomSheet";
import Movie from "../components/Movie";

const MoviesScreen = () => {
    let data;

    const [movies, setMovies] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("popular");

    const fetchMovieData = async  () => {
        if (selectedCategory === "now_playing") {
            data = await getNowPlayingMovies();
        } else if (selectedCategory === "popular") {
            data = await getPopularMovies();
        } else if (selectedCategory === "upcoming") {
            data = await getUpcomingMovies();
        } else if (selectedCategory === "top_rated") {
            data = await getTopRatedMovies();
        }
        setMovies(data);
    }

    useEffect(() => {
        fetchMovieData();
    }, [selectedCategory]);

    return (
        <SafeAreaView>
            <Pressable style={styles.topButton} visible={modalVisible} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>{selectedCategory}</Text>
            </Pressable>
            <BottomSheet
                onRequestClose={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onClose ={() => setModalVisible(false)}
                onCategoryChangePress={(value) => {
                    setSelectedCategory(value);
                }}
                selected={selectedCategory}
            />
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

const styles = StyleSheet.create({
    topButton: {
        width: 200,
        height: 36,
        borderWidth: 2,
        borderColor: "#e9e9e9",
        borderRadius: 8,
        marginVertical: 20,
        marginHorizontal: 30,
        alignSelf: "center"
    },
    buttonText: {
        padding: 4,
        paddingLeft: 6,
        fontSize: 14,
    }
})

export default MoviesScreen;
