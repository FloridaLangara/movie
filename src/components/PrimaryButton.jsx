import {Pressable, StyleSheet, Text, View} from "react-native";

const PrimaryButton = ({title}) => {
    return (
        <Pressable style={styles.buttonContainer}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
   buttonContainer: {
       backgroundColor: '#06b6d4',
       borderRadius: 8,
       height: 50,
       justifyContent: "center",
       alignItems: "center",
   },
    title: {
       fontSize: 15,
       color: "white",
    }
});

export default PrimaryButton;
