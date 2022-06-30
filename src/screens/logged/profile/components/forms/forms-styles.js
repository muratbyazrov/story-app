import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    form: {
        flex: 1,
        position: "absolute",
        width: '98%',
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        bottom: 0,
        minHeight: 300,
    },
    input: {
        fontSize: 24,
        color: 'black',
        marginBottom: 15,
        marginTop: 3
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20
    }
});
