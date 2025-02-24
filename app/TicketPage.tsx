import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, useColorScheme } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";
import axios from "axios";


export function TicketPage(){
    const colorScheme = useColorScheme();
    const lista = [
        { id: 1, name: "Ticket 1" },
        { id: 2, name: "Ticket 2" },
        { id: 3, name: "Ticket 3" },
    ];

    const [listaTicket, setListaTicket] = useState(lista);

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
          console.log('restaurantes', response.data)
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
                onPress={()=> alert(`Seleccionaste ${ticket.name}`)}
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