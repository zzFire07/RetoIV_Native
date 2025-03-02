import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LogoHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/padel.png")} style={styles.logo} />
      <Image source={require("@/assets/images/logo.png")} style={styles.nombre} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        alignItems: "center", // Centra el nombre
        marginTop: 40, // Ajusta según sea necesario
      },
      logo: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 123,
        height: 73,
      },
      nombre: {
        width: 355,
        height: 65,
        marginTop: 80, // Espacio desde el logo
      },
});

export default LogoHeader;
