import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";

export function MainPageButtons(){
    return(
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.buttonCancha}
                underlayColor={"black"}
                onPress={() => Alert.alert("Ver canchas disponibles")}
            >
                <Text style={styles.text}>VER CANCHAS DISPONIBLES</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style= {styles.buttonTorneo}
                underlayColor= {"black"}
                onPress={() => Alert.alert("Ver torneos disponibles")}
            >
                <Text style= {styles.text}>VER TORNEOS DISPONIBLES</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style= {styles.buttonTicketera}
                underlayColor={"black"}
                onPress={() => Alert.alert("Comprar ticketera")}
            >
                <Text style= {styles.text}>COMPRAR TICKETERA</Text>
            </TouchableHighlight>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
    },
    buttonCancha:{
        width:150,
        height: 100,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden"
        
    },        
    buttonTorneo:{
        width:150,
        height: 100,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden"
    },    
    buttonTicketera:{
        width: 150,
        height: 100,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        overflow: "hidden"
    }, 
    text:{
        color: "black",
        fontSize: 15,
        alignSelf: "center", 
        justifyContent: "center"

    }
});