import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Carga la imagen correctamente con `require()`
const ituzaingoImage = require("../assets/images/ituzaingo.png");

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      
      <Image style={styles.logo} source={ituzaingoImage} />
      
      
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginTop: 35,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 25, 
    marginLeft: -5, 
  },
  headerText: {
    fontSize: 25,
    color: "#000", 
    fontWeight: "bold",
  },
});

export default CustomHeader;
