import AuthenticationButton from "./AuthenticationButton";
import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import { Text, TouchableOpacity, StyleSheet, Linking  } from "react-native";

export function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
const handleWhatsAppPress=() => {
  const phoneNumber="59894431672";
  const whatsappURL=`https://wa.me/${phoneNumber}`;
  Linking.openURL(whatsappURL).catch(() =>
    alert("no se pudo abrir WhatsApp")
  );
};
  
    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        <TouchableOpacity style={styles.button} onPress={() => setLoggedIn(!loggedIn)}>
          <Text>{loggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.whatsappButton}
        onPress={handleWhatsAppPress}>
          <Text style={styles.whatsappText}> Contactar con Administrador</Text>
        </TouchableOpacity>
        {!loggedIn && <AuthenticationButton />}
        {loggedIn && (
          <>
            <Text>logged in</Text>
            {/* ticketera */}
          </>
        )}
      </>
    );  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00bf63",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  whatsappButton: {
    backgroundColor:"#25D366",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  whatsappText:{
    color:"white",
    fontSize: 16,
    fontWeight: "bold",
  },
});