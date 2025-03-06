import { StyleSheet, View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";
import  apiService  from "../services/apiService";
import * as WebBrowser from "expo-web-browser";
import { useUser } from "@/context/UserContext";



export default function PaymentStatusPage() {
    const params = useLocalSearchParams(); // Obtenemos los parámetros de la URL

    const [payment_id, setPaymentId] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");

    const {user, setUser} = useUser();

    const router = useRouter();


    useEffect(() => {
    WebBrowser.dismissBrowser();
    setPaymentId(Array.isArray(params.payment_id) ? params.payment_id[0] : params.payment_id);
    setStatus(Array.isArray(params.status) ? params.status[0] : params.status);
    setQuantity(Array.isArray(params.external_reference) ? params.external_reference[0] : params.external_reference);
    }, [params]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Payment Status: ", status);
            if (status === "approved") {
                const user_uid = await auth.currentUser?.uid || "";
                console.log(user_uid)
                if (user) {
                    setUser({
                        ...user,
                        tickets: String((Number(user.tickets) || 0) + Number(quantity)),
                    });
                }
                try {
                    const response = await apiService.addTickets(user_uid, {"description": "Compra de tickets", "tickets": Number(quantity) });
                    console.log("Respuesta de la API agregar ticket:", response.status);
                } catch (error) {
                    console.error("Error al agregar los tickets al usuario:", error);
                }
            }
        };
        fetchData();
    }, [status]);

  return (
    <>
        {(status === "approved") ? 
        <View style={styles.container}>
            <Text>Compra exitosa</Text> 
            <Text style={styles.text}>ID del pago: {payment_id}</Text>
            <Text style={styles.text}>Estado de la compra: {status}</Text>
            <Text style={styles.text}>Cantidad de partidos comprados: {quantity}</Text>
            <Button title="Volver al inicio" onPress={() => {router.replace("/")}} />
        </View>
        :
        <View style={styles.container}>  
            <Text>Compra cancelada</Text>
            <Text>Vuelve a intentarlo :)</Text>
            <Button title="Volver a la tienda" onPress={() => {router.back()} } />
        </View>
        }
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
