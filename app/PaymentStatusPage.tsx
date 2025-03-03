import { StyleSheet, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";
import  apiService  from "../services/apiService";



export default function PaymentStatusPage() {
    const params = useLocalSearchParams(); // Obtenemos los parámetros de la URL

    const [payment_id, setPaymentId] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");


    useEffect(() => {
    setPaymentId(Array.isArray(params.payment_id) ? params.payment_id[0] : params.payment_id);
    setStatus(Array.isArray(params.status) ? params.status[0] : params.status);
    setQuantity(Array.isArray(params.external_reference) ? params.external_reference[0] : params.external_reference);
    }, [params]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Payment Status: ", status);
            if (status === "approved") {
                const user_uid = await auth.currentUser?.uid;
                console.log(user_uid)
                try {
                    const response = await apiService.editUserTickets(user_uid, {"description": "Compra de tickets", "tickets": quantity });
                    console.log("Respuesta de la API agregar ticket:", response);
                } catch (error) {
                    console.error("Error al traer los paquetes:", error);
                }
            }
        };
        fetchData();
    }, [status]);

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
