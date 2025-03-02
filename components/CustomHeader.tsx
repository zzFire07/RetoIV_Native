import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const ituzaingoImage = require("../assets/images/logov2.png");

const CustomHeader = ({ title }: { title: string }) => {
  return (
      <View style={styles.header}>
        <Image style={styles.logo} source={ituzaingoImage} />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#eee",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  logo: {
    width: 342,
    height: 50,
  }
});

export default CustomHeader;
