import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, useColorScheme } from "react-native";
import TicketComponent from "@/components/TicketComponent";
import CustomHeader from "@/components/CustomHeader";

export function TicketPage(){
    const colorScheme = useColorScheme();
    const listatickets = [
        { id: 1, name: "Ticket 1" },
        { id: 2, name: "Ticket 2" },
        { id: 3, name: "Ticket 3" },
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