import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Carga la imagen correctamente con `require()`
const ituzaingoImage = require("../assets/images/ituzaingo.png");

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      {/* Imagen con margen a la izquierda */}
      <Image style={styles.logo} source={ituzaingoImage} />
      
      {/* Texto del header con color negro */}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "transparent", // Cambio: Se eliminó el color de fondo
    flexDirection: "row", // Alinea imagen y texto en fila
    alignItems: "center",
    justifyContent: "center", // Cambio: Alineación a la izquierda
    paddingHorizontal: 15,
    marginTop: 35,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 25, // Espacio entre la imagen y el texto
    marginLeft: -5, // Cambio: Mueve la imagen un poco a la izquierda
  },
  headerText: {
    fontSize: 25,
    color: "#000", // Cambio: Texto en color negro
    fontWeight: "bold",
  },
});

export default CustomHeader;
