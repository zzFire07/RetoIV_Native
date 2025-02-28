import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import * as WebBrowser from "expo-web-browser";
import apiService from "@/services/apiService"; // Asegúrate de importar el servicio correctamente
import WhatsAppButton from "@/components/unused-comps/WhatsAppButton";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import * as Linking from "expo-linking";
const lista = [
    { id: 1, name: "Ticketera 8 partidos", price: 1000 },
    { id: 2, name: "Ticketera 18 partidos", price: 2000 },
    { id: 3, name: "Ticketera 27 partidos", price: 3000 }
];
export function TicketPage() {
    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
    const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;
    const [listaTicket, setListaTicket] = useState(lista);

    const dipLink = Linking.createURL("PaymentStatusPage");

    /** :diamante_azul_pequeño: Función para manejar la compra */
    const handleBuy = async (product: { name: any; price: any }) => {
        try {
            const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth_token}`, // Token de MercadoPago
                },
                body: JSON.stringify({
                    items: [
                        {
                            title: product.name,
                            quantity: 1,
                            currency_id: "$",
                            unit_price: product.price
                        }
                    ],
                    auto_return: "approved",
                    back_urls: {
                        success: dipLink,
                        failure: dipLink,
                        cancel: dipLink
                    }
                })
            });
            const data = await response.json();
            return data.init_point;
        } catch (error) {
            console.error("Error en la compra:", error);
        }
    };
    /** :diamante_azul_pequeño: Función para abrir el pago en el navegador */
    const handlePayment = async (product: any) => {
        const paymentUrl = await handleBuy(product);
        if (paymentUrl) {
            let result = await WebBrowser.openBrowserAsync(paymentUrl);
            setResult(result);
        }
    };
    /** :diamante_azul_pequeño: Cargar tickets desde la API con autenticación */
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");
                if (!token) {
                    console.error("No se encontró el token de autenticación.");
                    return;
                }
                const response = await apiService.getAllPackages(); // Usa el servicio API
                setListaTicket(response.data);
            } catch (error) {
                console.error("Error al traer los paquetes:", error);
            }
        };
        fetchTickets();
    }, []);
    return (
        <>
            <CustomHeader title="Club Ituzaingo" />
            <View style={styles.container}>
                <Text style={styles.title}>Ticketeras Disponibles</Text>
                {listaTicket.map((ticket) => (
                    <TicketComponent key={ticket.id} id={ticket.id} name={ticket.name} onPress={() => handlePayment(ticket)} />
                ))}
            </View>
            <WhatsAppButton />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        padding: 2,
        backgroundColor: "white",
        paddingTop: 60
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 40,
        width: 300,
        height: 70, // MANTENER HEIGHT CON LINE HEIGHT PARA MANTENER CENTRADO
        backgroundColor: "#CA312B",
        borderRadius: 15,
        textAlign: "center",
        textAlignVertical: "center", // For Android
        lineHeight: 70, // For iOS == MANTENER LINE HEIGHT CON HEIGHT PARA MANTENER CENTRADO
        color: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"
    }
});
export default TicketPage;
