import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { auth } from "../firebaseConfig";
import { useEffect } from "react";
import  apiService  from "../services/apiService";



export default function PaymentStatusPage() {
    const user = auth.currentUser;

    const params = useLocalSearchParams(); // Obtenemos los parámetros de la URL
    const payment_id = params.payment_id;
    const status = params.status;
    const quantity = String(params.external_reference);

    useEffect(() => {
    if (params.status === "approved") {
        console.log("llamada al back addTicket",apiService.editUserTickets(user?.uid, quantity));
        console.log("uid firebase",user?.uid);
    }
    }, [params.status]);
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Payment Status</Text>
            <Text style={styles.text}>Payment ID: {payment_id}</Text>
            <Text style={styles.text}>Status: {status}</Text>
            <Text style={styles.text}>Ticket Count: {quantity}</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
    },
    });
