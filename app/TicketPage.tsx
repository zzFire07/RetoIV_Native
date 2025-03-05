import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import * as WebBrowser from "expo-web-browser";
import apiService from "@/services/apiService"; // Asegúrate de importar el servicio correctamente
import WhatsAppButton from "@/components/WhatsAppButton";
import * as Linking from "expo-linking";

const lista = [
    { package_id: 1, title: "Ticketera 8 partidos", price: 1000, ticket_quantity: 8 },
    { package_id: 2, title: "Ticketera 18 partidos", price: 2000, ticket_quantity: 18 },
    { package_id: 3, title: "Ticketera 27 partidos", price: 3000, ticket_quantity: 27 },
];
export function TicketPage() {
    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
    const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;

    const [listaTicket, setListaTicket] = useState<{ package_id: number; title: string; price: number; ticket_quantity: number }[]>([]);

    const dipLink = Linking.createURL("PaymentStatusPage");


    /** :diamante_azul_pequeño: Función para manejar la compra */
    const handlePreference = async (product: { title: string; price: number, ticket_quantity: number}) => {
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
                            title: product.title,
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
                    },
                    external_reference: product.ticket_quantity
                })
            });
            const data = await response.json();
            return data.init_point;
        } catch (error) {
            console.error("Error en la creacion de preferencia:", error);
        }
    };
    /** :diamante_azul_pequeño: Función para abrir el pago en el navegador */
    const handlePayment = async (product: any) => {
        const preferenceUrl = await handlePreference(product);
        if (preferenceUrl) {
            //Linking.openURL(preferenceUrl);
            const browser = await WebBrowser.openBrowserAsync(preferenceUrl, {
                enableBarCollapsing: true,
                showInRecents: false,
            });
            setResult(result);
        }
    };
    /** :diamante_azul_pequeño: Cargar tickets desde la API con autenticación */
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await apiService.getAllPackages(); // 🛜 Llamada a la API
                setListaTicket(response.data);
                console.log("Tickets cargados:", response.data);
                if(response.data.length === 0) {
                    console.warn("No hay tickets disponibles.");
                    setListaTicket(lista);
                }
            } catch (error) {
                setListaTicket(lista);
                console.error("Error al traer los paquetes:", error);
            }
        };

        fetchTickets();
    }, []);
    return (
        <>
          <CustomHeader/>
          <View style={styles.container}>
            <Text style={styles.title}>Ticketeras Disponibles</Text>
            {listaTicket.length > 0 ? (
              listaTicket.map((ticket, index) => (
                ticket && ticket?.package_id && ticket?.title ? ( 
                  <TicketComponent
                    key={index}
                    id={ticket?.package_id}
                    name={ticket?.title}
                    price={ticket?.price}
                    onPress={() => handlePayment(ticket)}
                  />
                ) : (
                    <Text key={index} style={styles.noTickets}>Error en los datos del ticket</Text>
                    )
                  ))
                ) : (
                  <Text style={styles.noTickets}>No hay tickets disponibles.</Text>
                )}
  
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
              paddingTop: 60,
          },
          title: {
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 40,
              width: 300,
              height: 70, // MANTENER HEIGHT CON LINE HEIGHT PARA MANTENER CENTRADO
              backgroundColor:"#ca312b",
              borderRadius: 15,
              textAlign: "center",
              textAlignVertical: "center", // For Android
              lineHeight: 70, // For iOS == MANTENER LINE HEIGHT CON HEIGHT PARA MANTENER CENTRADO
              color: "white",
          },
          noTickets: {
            fontSize: 18,
            color: "gray",
            marginTop: 20,
          },
      });
  
  
      export default TicketPage;