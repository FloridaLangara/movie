import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView} from "react-native";

import {fetchTvShowsByCategory} from "../api/movie";
import BottomSheet from "../components/BottomSheet";
import BottomSheetButton from "../components/BottomSheetButton";
import Movie from "../components/Movie";

const TVShowsScreen = ({navigation}) => {
    const [tvShows, setTvShows] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("popular");

    const options = ["airing_today", "on_the_air", "popular", "top_rated"];

    const fetchTVShowData = async  () => {
        const data = await fetchTvShowsByCategory(selectedCategory);
        setTvShows(data);
    }

    const onMoreDetailsPress = (movieId) => {
        navigation.navigate("Movie Details", {
            movieId: movieId
        })
    }

    useEffect(() => {
        fetchTVShowData();
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
                onCategoryChangePress={(value) => {
                    setSelectedCategory(value);
                    setModalVisible(false);
                }}
                options={options}
                selected={selectedCategory}
            />
            <FlatList
                data={tvShows}
                renderItem={({item}) =>
                    <Movie
                        image={item.poster_path}
                        movieTitle={item.name}
                        popularity={item.popularity}
                        releaseDate={item.first_air_date}
                        onMoreDetailsPress={() => onMoreDetailsPress(item.id)}
                    />}
            />
        </SafeAreaView>
    )
}

export default TVShowsScreen;
