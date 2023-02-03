import React, {useState} from "react";
import {Pressable, SafeAreaView, Text, View, StyleSheet, TextInput, FlatList} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import {searchByCategory} from "../api/movie";
import BottomSheet from "../components/BottomSheet";
import BottomSheetButton from "../components/BottomSheetButton";
import Movie from "../components/Movie";

const SearchScreen = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState("multi");
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    const options = ["multi", "movie", "tv" ];

    const validateTextInput = () => {
        if (!searchTerm) {
            setError(true);
            return false;
        }
        setError(false);
        return true;
    };

    const onSearchPress = async () => {
        validateTextInput();
        const data = await searchByCategory(searchTerm, selectedCategory);
        setSearchResult(data);
    }

    const onMoreDetailsPress = (movieId) => {
        navigation.navigate("Movie Details", {
            movieId: movieId
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text>Search Movie/TV Show Name</Text>
                <Text style={styles.redStar}>*</Text>
            </View>
            <View style={[styles.textInputStyle, isFocused && styles.inputFocused]}>
                <AntDesign style={{marginHorizontal: 8}} name="search1" size={18} color="gray" />
                <TextInput
                    onChangeText={(value) => setSearchTerm(value)}
                    value={searchTerm}
                    onSubmitEditing={validateTextInput}
                    onFocus={() => setIsFocused(true)}
                    placeholder={"i.e James Bond, CSI"}
                />
            </View>
            <View style={styles.headerContainer}>
                <Text>Choose Search Type</Text>
                <Text style={styles.redStar}>*</Text>
            </View>
            <View style={styles.buttonContainer}>
                <BottomSheetButton
                    modalVisible={modalVisible}
                    onBottomSheetButtonPress={() => setModalVisible(true)}
                    title={selectedCategory}
                />
                <Pressable  style={styles.button} onPress={onSearchPress}>
                        <AntDesign style={{marginHorizontal: 4}} name="search1" size={18} color="white" />
                        <Text style={styles.buttonText}>Search</Text>
                </Pressable>
            </View>
            <BottomSheet
                onRequestClose={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onCategoryChangePress={(value) => {
                    setSelectedCategory(value);
                    setModalVisible(false);
                }}
                selected={selectedCategory}
                options={options}
            />
            <Text>Please select a search type</Text>
            {error ? <Text style={styles.errorText}>Movie/TV Show name is required</Text> : ""}
            {searchResult?.length === 0 ?  <Text style={styles.placeholderText}>Please initiate a search </Text> :
                <FlatList
                    data={searchResult}
                    renderItem={({item}) =>
                        <Movie
                            image={item.poster_path}
                            movieTitle={item.title}
                            popularity={item.popularity}
                            releaseDate={item.release_date}
                            onMoreDetailsPress={() => onMoreDetailsPress(item.id)}
                        />}
                />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {
    button: {
        backgroundColor: "#06b6d4",
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        padding: 8,
        fontSize: 16,
        color: "white",
    },
    container: {
        marginHorizontal: 25,
        marginVertical: 16,
    },
    errorText: {
       color: "red",
    },
    textInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: 36,
        borderWidth: 2,
        borderColor: "#e9e9e9",
        borderRadius: 8,
        marginVertical: 20,
    },
    inputFocused: {
      borderColor: "red"
    },
    placeholderText: {
        fontSize: 24,
        alignSelf: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: 65,
    },
    headerContainer: {
        flexDirection: "row"
    },
    redStar: {
        color: "red",
    }
})

export default SearchScreen;
