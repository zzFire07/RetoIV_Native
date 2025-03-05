import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LogoHomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo-club.png")} style={styles.logoClub} />
      <Image source={require("@/assets/images/nombre-club.png")} style={styles.nombreClub} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: "center", // Centra el contenedor
        width: "100%", 
        alignItems: "center", // Centra el nombre
        marginTop: 40, // Ajusta según sea necesario
      },
      logoClub: {
        position: "absolute",
        top: 5,
        left: 15,
        width: 123,
        height: 73,
      },
      nombreClub: {
        width: 355,
        height: 65,
        marginTop: 20 + 73, // 20 de margen + 73 que es la altura del logo
      },
});

export default LogoHomePage;
