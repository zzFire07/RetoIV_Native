import { StyleSheet, Text, View, TouchableHighlight, Alert } from "react-native";

export function BotonesMainPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.cantidadTicket}>Cantidad de tickets: </Text>
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

    },
    cantidadTicket:{
        fontSize: 20,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: "#1a8945",
        borderRadius: 20,
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        }
});