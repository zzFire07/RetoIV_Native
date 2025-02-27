import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import * as WebBrowser from 'expo-web-browser';
import WhatsAppButton from "@/components/unused-comps/WhatsAppButton";
import apiService from "@/services/apiService";

export function TicketPage(){

  const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
  const [listaTicket, setListaTicket] = useState([]);
  const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;

  useEffect(() => {
    apiService
      .getAllPackages()
      .then((response) => {
        setListaTicket(response.data); 
        console.log("Paquetes obtenidos:", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener paquetes:", error);
      });
  }, []);

    const handleBuy = async (product: { name: string; price: number }) => {
        try {
          const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth_token}`, // Reemplaza con tu Access Token de MercadoPago
            },
            body: JSON.stringify({
              items: [{
                title: product.name,
                quantity: 1,
                currency_id: "$",
                unit_price: product.price
              }],
              auto_return: "approved",
              back_urls: {
                success: "exp://10.4.3.51:8081/PaymentStatusPage",
                failure: "exp://10.4.3.51:8081/PaymentStatusPage",
                cancel: "exp://10.4.3.51:8081/PaymentStatusPage"
              },
            }),
          });
      
          const data = await response.json();
          return data.init_point;
        } catch (error) {
          console.error("Error al generar la compra:", error);
        }
      };

    const handlePayment = async (product: {name: string; price: number}) =>{
        const paymentUrl = await handleBuy(product);
        if (paymentUrl) {
          let result = await WebBrowser.openBrowserAsync(paymentUrl);
          setResult(result);
        }
    }


    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        <View style={styles.container}>
          <Text style={styles.title}>Ticketeras Disponibles</Text>
          {listaTicket.length > 0 ? (
            listaTicket.map((ticket, index) => (
              ticket && ticket?.id && ticket?.name ? ( 
                <TicketComponent
                  key={index}
                  id={ticket?.id}
                  name={ticket?.name}
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