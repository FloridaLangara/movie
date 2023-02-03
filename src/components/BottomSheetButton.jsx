import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

const BottomSheetButton = (props) => {
    return (
        <View>
            <Pressable style={styles.topButton} visible={props.modalVisible} onPress={props.onBottomSheetButtonPress}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </Pressable>
        </View>
    );
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
});

export default BottomSheetButton;
