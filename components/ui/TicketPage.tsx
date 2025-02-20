import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, useColorScheme } from "react-native";

export function TicketPage(){
    const colorScheme = useColorScheme();
    const listatickets = [
        { id: 1, name: "Ticket 1" },
        { id: 2, name: "Ticket 2" },
        { id: 3, name: "Ticket 3" },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tickets Disponibles</Text>
            {listatickets.map((ticket)=>(
                <TouchableHighlight
                    key={ticket.id}
                    style={styles.button}
                    onPress={()=>alert(`Seleccionaste ${ticket.name}`)}
                    underlayColor="#333"
                >
                    <Text style={styles.buttonText}>{ticket.name}</Text>
                </TouchableHighlight>
            ))}
        </View>
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
            width:200,
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