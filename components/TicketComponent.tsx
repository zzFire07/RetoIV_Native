import React from "react";
import { Text, StyleSheet, TouchableHighlight, Image, View } from "react-native";

const mercadoPagoLogo = require("../assets/images/Mercado-Pagoo.png");

interface TicketProps {
    id: number;
    name: string;
    onPress: () => void;
}

const TicketComponent: React.FC<TicketProps> = ({id, name, onPress}) => {
    return (
        <>
        
       
            <TouchableHighlight
                key={id}
                style={styles.button}
                onPress={onPress}
                underlayColor="#333"
            >
                <View style={styles.buttonContent}>
                    
                    <Text style={styles.buttonText}>{name}</Text>
                    <Image source={mercadoPagoLogo} style={styles.logo} />

                </View>
                
            </TouchableHighlight>
            </>
    );
};

const styles= StyleSheet.create({
    button: {
        backgroundColor: "#00bf63",
        padding: 15,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        width: "65%",
      },
      buttonContent: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",

      },
      logo:{
        width:30,
        height: 30,
        resizeMode: "contain",
        marginRight: 10,
        marginLeft: 10,

      },
      buttonText: {
        color: "#111",
        fontSize: 16,
      },
});

export default TicketComponent;