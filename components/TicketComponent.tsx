import React from "react";
import { Text, StyleSheet, TouchableHighlight, Image, View } from "react-native";

const mercadoPagoLogo = require("../assets/images/Mercado-Pagoo.png");

interface TicketProps {
    id: number;
    tickets: number;
    price: number;
    onPress: () => void;
}

const TicketComponent: React.FC<TicketProps> = ({id, tickets, price, onPress}) => {
    return (
        <>
            <TouchableHighlight
            	key={id}
            	style={styles.button}
            	onPress={onPress}
            	underlayColor="#333"
            >
                <View style={styles.buttonContent}>
                  <View style={{flexDirection:"column", width: "70%"}}>
                    <Text style={styles.buttonText}>Partidos {tickets}</Text>
                    <Text style={styles.buttonText}>${price}</Text>
                  </View>
                  <Image source={mercadoPagoLogo} style={styles.logo} /> 
                </View>
            </TouchableHighlight>
        </>
    );
};

const styles= StyleSheet.create({
    button: {
      backgroundColor: "#AFD4C1",
      padding: 10,
      marginVertical: 10,
      borderRadius: 20,
      alignItems: "center",
      width: 200,
    },
    buttonContent: {
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "100%"
    },
    logo:{
      width:30,
      height: 30,
      resizeMode: "contain",
      
    },
    buttonText: {
      color: "#111",
      fontSize: 16,
      fontStyle: "italic",
      fontWeight: 500,
      textAlign: "left"
    }
});

export default TicketComponent;