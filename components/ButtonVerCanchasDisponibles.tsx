import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export function ButtonVerCanchasDisponibles(){
    return(
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}
                underlayColor={"red"}
            >
                <Text style={styles.text}>Ver canchas disponibles</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,

    },
    button:{
        width:150,
        height: 100,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },        
    text:{
        color: "black",
        fontSize: 15,

    }
});