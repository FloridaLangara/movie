import {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import PrimaryButton from "./PrimaryButton";

const Movie = ({movieTitle, popularity, releaseDate, image}) => {
    const [error, setError] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.image} accessibilityLabel={"Poster of the movie"} onError={() => setError(true)} source={{uri: error ? "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" :`https://api.themoviedb.org${image}`}}/>
            <View style={styles.textContainer}>
                <Text style={styles.movieTitle}>{movieTitle}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date: {releaseDate}</Text>
                <PrimaryButton title={"More Details"} />
            </View>
            <View style={styles.separator}></View>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       flexDirection: "row",
       marginVertical: 8,
   },
    separator: {
        borderBottomWidth: 6,
        borderColor: "gray",
        marginBottom: 8,
    },
    image: {
       flex: 1,
        width: 40,
        height: 105,
        marginLeft: 8,
    },
    textContainer: {
        flex: 2,
        marginHorizontal: 16
    },
    movieTitle: {
       fontWeight: "bold",
        fontSize: 14
    }

});

export default Movie;
