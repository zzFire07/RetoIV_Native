import React from "react";
import {View, Text, TouchableOpacity, Image,  StyleSheet, Linking } from "react-native";

const handleWhatsAppPress = () => {
  const phoneNumber = "59897664353";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  Linking.openURL(whatsappURL).catch(() =>
    alert("No se pudo abrir WhatsApp")
  );
};

export default function WhatsAppButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contáctanos</Text>
    
      <TouchableOpacity onPress={handleWhatsAppPress}>
        <Image source={require("../../assets/images/whatsapp-logo.jpg")}
        style={styles.whatsappIcon} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center",
    position:"absolute",
    bottom: 95,
    right: 20,
    zIndex: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:"black",
    borderRadius:40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.3)",
  },
  texto:{
    fontSize: 16,
    color: "black",
    marginRight: 10,
  },
  whatsappIcon: {
    width: 45,
    height: 50,
    resizeMode: "contain",
  },
});
