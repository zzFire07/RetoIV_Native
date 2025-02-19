import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export function ButtonVerCanchasDisponibles(){
    return(
        <View style={styles.container}>
            <TouchableHighlight
            style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Text style={{color: "black"}}>Ver canchas disponibles</Text>
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
  });