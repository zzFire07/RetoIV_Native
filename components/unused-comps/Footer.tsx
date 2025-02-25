import React, { useState } from "react";
import { View,StyleSheet } from "react-native";
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
    justifyContent: "space-evenly",
    width: "140%",
    position: "absolute",
    bottom: -330,
    paddingTop:20,
    paddingBottom: 320,
    backgroundColor: "#00bf63"
  }, 

});

export default Footer;