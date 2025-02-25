import React from "react";
import { Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

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
      <Text style={styles.whatsappText}>Contactar con Administrador</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  whatsappButton: {
    backgroundColor: "#25D366",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  whatsappText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
