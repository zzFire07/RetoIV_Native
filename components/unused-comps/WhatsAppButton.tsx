import React from "react";
import {TouchableOpacity, Image,  StyleSheet, Linking } from "react-native";

const handleWhatsAppPress = () => {
  const phoneNumber = "59899532260";
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  Linking.openURL(whatsappURL).catch(() =>
    alert("No se pudo abrir WhatsApp")
  );
};

export default function WhatsAppButton() {
  return (
    <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsAppPress}>
      <Image source={require("../../assets/images/whatsapp-logo.jpg")}
      style={styles.whatsappIcon} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  whatsappButton: {
    position: "absolute",
    bottom: 60,
    right: 20,
    zIndex: 10,
    marginTop: 50,
    marginBottom: 50,
  
  },
  whatsappIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
