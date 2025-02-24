import AuthenticationButton from "./AuthenticationButton";
import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  
    return (
      <>
        <CustomHeader title="Club Ituzaingo" />
        <TouchableOpacity style={styles.button} onPress={() => setLoggedIn(!loggedIn)}>
          <Text>{loggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}</Text>
        </TouchableOpacity>
        {!loggedIn && <AuthenticationButton />}
        {loggedIn && (
          <>
            <Text>logged in</Text>
            {/* ticketera */}
          </>
        )}
      </>
    );  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00bf63",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});