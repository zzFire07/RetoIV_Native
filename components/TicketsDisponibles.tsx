import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Link } from "expo-router";

export default function TicketsDisponibles(){

    const cantidadTickets = 0

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
                        <Text style={styles.text}>Comprar Tickets</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    text:{
        fontSize: 20,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: "#1a8945",
        borderRadius: 30,
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    boton: {
        padding: 10,
        width: 250,
        height: 50,
        margin: 10,
        marginTop: 100,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }

})