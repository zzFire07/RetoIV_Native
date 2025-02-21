import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import CustomHeader from "./Header";
export function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  
    return (
        <View style={styles.container}>
            <CustomHeader title="Club Ituzaingo" />
            <TouchableHighlight
            style={{
                width: 100,
                height: 50,
                backgroundColor: "black",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
            }}
            onPress={() => setLoggedIn(!loggedIn)}
            >
            <Text style={{ color: "white" }}>{loggedIn ? "Cerrar sesión" : "Iniciar sesión"}</Text>
            </TouchableHighlight>
            <Text>{loggedIn ? "Logeado" : "No logeado"}</Text>
        </View>
    );
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",

    },
  });
  
