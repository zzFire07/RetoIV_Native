import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ImageBackground source={require("@/assets/images/background.png")} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
});

export default BackgroundContainer;
