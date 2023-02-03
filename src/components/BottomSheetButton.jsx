import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const BottomSheetButton = (props) => {
    return (
        <View>
            <Pressable style={styles.topButton} visible={props.modalVisible} onPress={props.onBottomSheetButtonPress}>
                <View style={styles.container}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                    <AntDesign name="down" size={16} color="gray" />
                </View>
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
        alignSelf: "center"
    },
    buttonText: {
        padding: 6,
        paddingLeft: 6,
        fontSize: 14,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default BottomSheetButton;
