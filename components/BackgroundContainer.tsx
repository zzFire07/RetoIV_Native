import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


const BackgroundContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const background = require("../assets/images/background-padel.png");

  return (
    <ImageBackground source={background} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    alignSelf: "center",
    width: "100%",
  },
});

export default BackgroundContainer;
