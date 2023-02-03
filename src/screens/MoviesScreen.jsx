import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView } from "react-native";
import {fetchMoviesByCategory} from "../api/movie";
import BottomSheet from "../components/BottomSheet";
import BottomSheetButton from "../components/BottomSheetButton";
import Movie from "../components/Movie";

const MoviesScreen = () => {
    const [movies, setMovies] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("popular");

    const options = ["now_playing", "popular", "top_rated", "upcoming"];

    const fetchMovieData = async  () => {
        const data = await fetchMoviesByCategory(selectedCategory);
        setMovies(data);
    }

    useEffect(() => {
        fetchMovieData();
    }, [selectedCategory]);

    return (
        <SafeAreaView>
            <BottomSheetButton
                modalVisible={modalVisible}
                onBottomSheetButtonPress={() => setModalVisible(true)}
                title={selectedCategory}
            />
            <BottomSheet
                onRequestClose={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onClose ={() => setModalVisible(false)}
                onCategoryChangePress={(value) => {
                    setSelectedCategory(value);
                }}
                options={options}
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

export default MoviesScreen;
