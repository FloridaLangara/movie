import {Image, Pressable, Text, View} from "react-native";

const Movie = ({movieTitle, popularity, releaseDate}) => {
    return (
        <View>
            <Image/>
            <Text>{movieTitle}</Text>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {releaseDate}</Text>
            <Pressable>More Details</Pressable>
        </View>
    )
}

export default Movie;