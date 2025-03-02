import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const logodoble = require("../assets/images/logo-doble.png");

const CustomHeader = ({ title }: { title: string }) => {
  return (
      <View style={styles.header}>
        <Image style={styles.logo} source={logodoble} />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#eee",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45
  },
  logo: {
    width: 342,
    height: 50,
  }
});

export default CustomHeader;
