import React, { useState } from "react";
import { View,StyleSheet, Platform } from "react-native";
import FooterButton from "./FooterButton";

const Footer: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
    return (
        <View style={styles.footer}>
            <FooterButton title="Inicio" onPress={() => alert(loggedIn ? "Logged In" : "Logged Out")} />
            {!loggedIn && <FooterButton title="Iniciar Sesión" onPress={() => setLoggedIn(true)} />}
            {loggedIn && <FooterButton title="Perfil" onPress={() => setLoggedIn(false)} />}
        </View>
    );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "140%",
    position: "sticky",
    bottom: Platform.select({ ios: -330, android: -315 }),
    paddingTop: 20,
    paddingBottom: 270,
    backgroundColor: "#00bf63"
  }, 

});

export default Footer;