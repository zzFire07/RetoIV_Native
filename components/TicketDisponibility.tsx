import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Link } from "expo-router";

export default function TicketDisponibility(){

    const cantidadTickets = 0;

    if (cantidadTickets > 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tickets disponibles: {cantidadTickets}</Text>
            </View>
        );
        
    } else {
        return (
            <View style={styles.container}>
                <Link href="/TicketPage" asChild>
                    <TouchableOpacity style={styles.boton}>
                        <Text style={styles.text}>COMPRAR TICKETS YA</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
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
        lineHeight: 50, // For iOS
    },
    boton: {
        padding: 10,
        width: 250,
        height: 50,
        margin: 10,
        marginTop: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})
