import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import * as WebBrowser from 'expo-web-browser';

export function TicketPage(){

  const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);

    const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;

    const handleBuy = async (product: { name: any; price: any; }) => {
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
          console.log(data);

          return data.init_point;
        } catch (error) {
          console.log("Error al generar la compra:", error);
        }
      };

    const handlePayment = async (product: any) =>{
        const paymentUrl = await handleBuy(product);
        if (paymentUrl) {
          let result = await WebBrowser.openBrowserAsync(paymentUrl);
          setResult(result);
        }
    }



    const listatickets = [
        { id: 1, name: "Ticketera 8 partidos", price: 1000 },
        { id: 2, name: "Ticketera 18 partidos", price: 2000 },
        { id: 3, name: "Ticketera 27 partidos", price: 3000 },
        { id: 4, name: "Ticketera 36 partidos", price: 4000 },
        { id: 5, name: "Pasar el reto IV", price: 5000 },
    ];
    return (
        <>
        <CustomHeader title="Club Ituzaingo" />
        <View style={styles.container}>
            <Text style={styles.title}>Ticketeras Disponibles</Text>
            {listatickets.map((ticket)=>(
                <TicketComponent
                key={ticket.id}
                id={ticket.id}
                name={ticket.name}
                onPress={()=> handlePayment(ticket)}
                />
            ))}
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
            padding: 2,
            backgroundColor: "white",
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            width: 300,
            height: 70,
            backgroundColor:"#00bf63",
            borderRadius: 15,
            textAlign: "center",
            textAlignVertical: "center",
            color: "white",
        },
    });


    export default TicketPage;