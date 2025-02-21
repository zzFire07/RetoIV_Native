import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const ituzaingoImage = require("../assets/ituzaingo.png");

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
        <Image style={styles.header} source={ituzaingoImage}  />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  headerText: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});

export default CustomHeader;
