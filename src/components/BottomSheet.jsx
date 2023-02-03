import React from "react";
import {Button, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BottomSheet = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onRequestClose}
            style={{flex: 1}}
        >
            <View onTouchStart={props.onTouchStart} style={styles.centeredView}>
                <View style={styles.modalView}>
                    { props.options?.map((option, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={props.selected === option ? styles.selectedButton : styles.button}
                                onPress={() => {
                                    props.onCategoryChangePress(option)
                                }}
                            >
                                <Text style={props.selected === option ? styles.selectedText : styles.textStyle}>
                                    {option}
                                </Text>
                            </TouchableOpacity >
                        );
                    })}
                    <Button title={"close"} onPress={props.onClose}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 40,
    },
    modalView: {
        width: '100%',
        height: '35%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        alignSelf: "flex-start",
        paddingVertical: 4,
        paddingLeft: 4,
        marginVertical: 4,
    },
    selectedButton: {
        backgroundColor: "#1f7d70",
        alignSelf: "flex-start",
        paddingVertical: 4,
        paddingLeft: 4,
        marginVertical: 4,
        width: "100%",
        borderRadius:4,

    },
    selectedText: {
        color: "white",
        fontSize: 16,
    },
    textStyle: {
        fontSize: 16,
    },
});

export  default BottomSheet;
