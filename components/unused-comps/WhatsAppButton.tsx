import React from "react";
import {View, Text, TouchableOpacity, Image,  StyleSheet, Linking } from "react-native";

const handleWhatsAppPress = () => {
  const phoneNumber = "59899532260";
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
    bottom: 100,
    right: 20,
    zIndex: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor:"#00bf63",
    borderRadius:10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  texto:{
    fontSize: 16,
    color: "black",
    marginRight: 10,
  },
  whatsappIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
