import React  from "react";
import { View,StyleSheet } from "react-native";
import FooterButton from "./FooterButton";

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <FooterButton title="Inicio" onPress={() => alert("Inicio presionado")} />
            <FooterButton title="Iniciar Sesion" onPress={() => alert("Iniciar Sesion presionando")} />   
        </View>
    );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    position: "absolute",
    bottom: 20,
    padding:10,
    backgroundColor: "#00bf63"
  }, 

});

export default Footer;