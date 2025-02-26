import { StyleSheet, Text, View } from "react-native";

export default function MatchDisponibility(){

    const cantidadTickets = 0;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Partidos disponibles: {cantidadTickets}</Text>
        </View>
        );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginBottom: 90,
        
    },
    text:{
        fontSize: 20,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: "#11aa5a",
        borderRadius: 30,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center", // For Android
        lineHeight: 50, // For iOS,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"

    }
})
