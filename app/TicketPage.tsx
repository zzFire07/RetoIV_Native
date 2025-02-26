import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

const lista = [
    { id: 1, name: "Ticketera 8 partidos", price: 1000 },
    { id: 2, name: "Ticketera 18 partidos", price: 2000 },
    { id: 3, name: "Ticketera 27 partidos", price: 3000 }
];

export function TicketPage(){

  const [result, setResult] = useState<WebBrowser.WebBrowserResult | null>(null);
  
  const auth_token = process.env.EXPO_PUBLIC_MP_AUTH;

  const [listaTicket, setListaTicket] = useState(lista);

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

          return data.init_point;
        } catch (error) {
          
        }
      };

    const handlePayment = async (product: any) =>{
        const paymentUrl = await handleBuy(product);
        if (paymentUrl) {
          let result = await WebBrowser.openBrowserAsync(paymentUrl);
          setResult(result);
        }
    }

    useEffect(()=>{
        // Se intenta traer informacion desde la base de datos, si no se puede se setea la informacion provisoria.
        axios.get('http://localhost:3000/traerpaquetes',{
          headers: {
            'Access-Control-Allow-Origin' : '*'
          },
          responseType: "json",
        }).then((response) => {
        // Si el back-end esta corriendo correctamente, se setea la informacion de la base de datos.
          setListaTicket(response.data);
        }).catch((error) => {
        // Si el back-end no esta corriendo, se setea la informacion provisoria.
        })
    
    },[])

    return (
        <>
          <CustomHeader title="Club Ituzaingo" />
          <View style={styles.container}>
              <Text style={styles.title}>Ticketeras Disponibles</Text>
              {listaTicket.map((ticket)=>(
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
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"

        },
    });


    export default TicketPage;