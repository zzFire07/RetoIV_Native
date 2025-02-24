import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, useColorScheme, Alert } from "react-native";
import ComponenteTicket from "@/components/ComponenteTicket";
import CustomHeader from "@/components/Header";
import * as WebBrowser from 'expo-web-browser';

export function TicketPage(){

    const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);

    const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;

    const [paymentUrl, setPaymentUrl] = useState(null);


    const handleBuy = async (product: any, setPaymentUrl: (arg0: any) => void) => {
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
                success: "tuapp://success",
                failure: "tuapp://failure",
              },
            }),
          });
      
          const data = await response.json();
          setPaymentUrl(data.init_point); // Guardar la URL de pago
        } catch (error) {
          Alert.alert("Error", "Hubo un problema al generar la compra.");
        }
      };

    const handlePayment = async (product: any, setPaymentUrl: any) =>{
        await handleBuy(product, setPaymentUrl);
        if(paymentUrl){
            alert("Redireccionando a MercadoPago");
            let result = await WebBrowser.openBrowserAsync(paymentUrl);
            setResult(result);
        }
    }



    const listatickets = [
        { id: 1, name: "Ticketera 8 partidos", price: 1000 },
        { id: 2, name: "Ticketera 18 partidos", price: 2000 },
        { id: 3, name: "Ticketera 27", price: 3000 },
        { id: 5, name: "Pasar el reto IV", price: 5000 },
    ];
    return (
        <>
        <CustomHeader title="Club Ituzaingo" />
        <View style={styles.container}>
            <Text style={styles.title}>Tickets Disponibles</Text>
            {listatickets.map((ticket)=>(
                <ComponenteTicket
                key={ticket.id}
                id={ticket.id}
                name={ticket.name}
                onPress={()=> handlePayment(ticket, setPaymentUrl)}
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
            padding: 20,
            backgroundColor: "white",
            marginTop:40,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
        },
        button: {
            width: 200,
            height: 50,
            backgroundColor:"black",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
        },
        buttonText: {
            color: "white",
            fontSize: 18,
        },
    });


    export default TicketPage;